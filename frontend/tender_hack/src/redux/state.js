let state = {
    noteData:  [
       {id: 0, title: "Ложка", maker: "Russia", name: 'bla', weight: "4323"},
       {id: 1, title: "Стол", maker: "Japan", name: 'bla', weight: "13121"},
       {id: 2, title: "Тумба", maker: "USA", name: 'bla', weight: "31312"},
       {id: 3, title: "Табурет", maker: "Canada", name: '', weight: "3231"},
       {id: 4, title: "Чтото", maker: "France", name: 'bla', weight: "3231"},
       {id: 5, title: "Вилка", maker: "England", name: 'bla', weight: "3123"},
       {id: 6, title: "Забор", maker: "Italy", name: 'bla', weight: "3213"},
       {id: 7, title: "Окно", maker: "Germany", name: 'bla', weight: "2313"},
   ],
   profile: {
       users: [],
       data: [],
   }
};

export let request = (requestMessage) => {
    let queryBody = requestMessage;
    const api_url = 
      fetch('http://127.0.0.1:8000/query/' +  queryBody);
}

export default state;