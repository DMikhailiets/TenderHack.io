
import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import style from './mc.module.css';
import './style.css';
import Note from '../note/note';
//import Search_item from '../search_item';



const Main_content = (props) => {
   
    console.log(props.data);
    setTimeout(5000);
    let noteArray = props.data.noteData.map(note => <Note  id={JSON.parse(note.id)} name={JSON.parse(note.name)} title={JSON.parse(note.title)}/>);
    console.log(props);
    
  
    return(
        <div className={style.content_wrapper}>
            <div className={style.form_wrapper}>
                  <form className="destinations-form">
                     <div className="input-line">
                        <textarea  type="text" name="destination" className="form-input check-value" placeholder="КАКОЙ ТОВАР ВАС ИНТЕРЕСУЕТ?" /> 
                        <button  type="button" name="destination-submit" className="form-submit btn btn-special">Искать товар</button>
                     </div>
                  </form>

            </div>
            <div className={style.main_content_wrapper}>
            {noteArray}
            </div>
        </div>
    )
}

export default Main_content;