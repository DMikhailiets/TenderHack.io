import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './note.module.css';

const Note = (props) => {
  /*<div className="signupSection">
    <div className="info">
       {<img src={img} className="image" alt="fsdfdsf"/>}
    </div>
    <form action="#" method="POST" className="signupForm" name="signupform">
      
    </form>
    </div>*/
    return(
    <div className={style.note_wrapper}>
      <div className={style.logo_wrapper}>
         <div className={style.logo_date}>
           {props.maker}
         </div>
         <div className={style.logo_date}>
           {props.weight}
         </div>
      </div>
      <div className={style.content}>
        <div className={style.title}>
    <div>{props.title}</div>
        </div>
        <div className={style.message}>
    <p>{props.name}</p>
        </div>
      </div>
    </div>
    )
}

export default Note;