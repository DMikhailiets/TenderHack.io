
import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import style from './mc.module.css'
import './style.css';
import Note from '../note/note';
//import Search_item from '../search_item';


const Main_content = (props) => {
    let noteArray = props.resoults.map(note => <Note id={note.id} maker={note.maker} name={note.name} title={note.title} weight={note.weight} />);
    
  
    return(
        <div className={style.content_wrapper}>
            <div className={style.form_wrapper}>
                  <form class="destinations-form">
                     <div class="input-line">
                        <textarea  type="text" name="destination" class="form-input check-value" placeholder="КАКОЙ ТОВАР ВАС ИНТЕРЕСУЕТ?" /> 
                        <button  type="button" name="destination-submit" class="form-submit btn btn-special">Искать товар</button>
                     </div>
                  </form>

            </div>
            <div className={style.main_content_wrapper}>
            <NavLink to="/MainPage/CurrentNote">{noteArray}</NavLink>
            </div>
        </div>
    )
}

export default Main_content;