# -*- coding: UTF-8 -*-
from django.http import HttpResponse
from django.http import HttpRequest
from django.http import JsonResponse
import gensim as gs
from gensim.models.fasttext import FastText
import pandas as pd
from fuzzywuzzy import fuzz


class ML:
    data = pd.read_csv('/home/dmikhailiets/My_Work/My_Projects/TenderHack.io/backend/API/root/server/table.csv',index_col='Id')
    data['Наменование'] = data['Наменование'].apply(lambda s : str(s))
    props = {"title": "Наменование", "name": 'Вид товаров'}
    ids = dict([[row['Наменование'],ind] for ind,row in data.iterrows()])
    names = data['Вид товаров'].values.tolist()
    names = [str(name) for name in names]
    texts = data['Наменование'].values.tolist()
    texts = [str(text) for text in texts]
    docs = [[text for text in doc.split()] for doc in texts]
    ft = FastText.load('/home/dmikhailiets/My_Work/My_Projects/TenderHack.io/backend/API/root/server/ftm')
    @classmethod
    def get_values(cls,name):
        ind = cls.ids[name]
        row = cls.data.loc[ind]
        res = dict([[pr,row[nm]] for pr,nm in cls.props.items()])
        res['id'] = str(ind)
        return res
    @classmethod
    def ft_query(cls,q:str):
        return cls.ft.wv.most_similar([q.lower(),q.capitalize()],topn=100)
    @classmethod
    def metric(cls,result,query_str):
        name,key = result
        key *= 200
        #print(query_str,name,fuzz.token_set_ratio(query_str,name))
        key += fuzz.token_set_ratio(query_str,name)
        if (query_str.lower() in name.split() or query_str.capitalize() in name.split()):
            key += 50
        if (name.find(query_str.lower())!= -1 or name.find(query_str.capitalize())!= -1):
            key += 30
        return -key
    @classmethod 
    def get_key(cls,result):
        _,key = result
        return key
    @classmethod
    def search(cls,q:str):
        res = cls.ft_query(q)
        query_str = q;
        res = [(name,cls.metric((name,key),q)) for name,key in res]
        res.sort(key = cls.get_key)
        res = [elem for elem in res if cls.get_key(elem) < -90]
        #print([[name,val,-get_key((name,val))] for name,val in res])
        return {'noteData':[cls.get_values(nm) for nm,_ in res]}


def products(request, id):
    return JsonResponse(ML.search(id))
  






