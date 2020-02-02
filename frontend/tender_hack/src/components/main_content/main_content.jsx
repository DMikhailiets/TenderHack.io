
import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import style from './mc.module.css';
import './style.css';
import Note from '../note/note';
//import Search_item from '../search_item';



const Main_content = (props) => {
   
    console.log(props.data);
  
    let noteArray = props.data.noteData.map(note => <Note  id={note.id} name={note.name} title={note.title}/>);
    console.log(props);
    
  
    return(
        <div className={style.content_wrapper}>
             <a className={style.button}href="/search">search</a>
            <div className={style.main_content_wrapper}>
            {noteArray}
            </div>
        </div>
    )
}

export default Main_content;