import React from 'react';
import '../../App.css';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';
import Main_content from '../main_content/main_content';
import ReactDOM from 'react-dom';


const Section = (props) => {
    let myRef = React.createRef();

    let getQueryBody = () => {
       let queryBody = myRef.current.value;
       request(queryBody);
    }

   async function request(requestMessage){
      let response = await fetch('http://127.0.0.1:8000/query/' +  requestMessage);
      let data = await response.json();
      // console.log(content.splice(0, 10));
      //console.log(data);
      ReactDOM.render(<Main_content data={data}/>, document.getElementById('root'));
            
  }
  
    return (

         <div className={style.content_wrapper}>
            <div className="hero-box">
               <div className="container">
                  <div className="hero-text align-center">
                     <h1>Найди своего поставщика сейчас!</h1>
                     <p>и закажи у него товар по завышенной цене!</p>
                  </div>
                 
                  <form className="destinations-form">
                     <div className="input-line">
                        <textarea ref={myRef} type="text" name="destination" className="form-input check-value" placeholder="КАКОЙ ТОВАР ВАС ИНТЕРЕСУЕТ?" /> 
                        <NavLink onClick={getQueryBody}to="/resoults"><button  type="button" name="destination-submit" className="form-submit btn btn-special">Искать товар</button></NavLink>
                     </div>
                  </form>
                  
                  
               </div>
            </div>
         </div>
         
    
    )
}  

export default Section;