import React from 'react';
import '../../App.css';
import style from './style.module.css';

const Section = (props) => {
   let myRef = React.createRef();
   
   let myAlert = () => {
        let text = myRef.current.value;
        alert(text);
        myRequest(text);
   }
   let myRequest = async (text) => {
      // const api_url = await fetch(`http:127.0.0.1:8000/api/${text}`);
      const api_url = await fetch('http://127.0.0.1:8000/query/' +  text);
     
      const data = await api_url.json;
      console.log=(data);
   }

  
    return (
     
         <div class="section section-hero">
            <div class="hero-box">
               <div class="container">
                  <div class="hero-text align-center">
                     <h1>Найди своего поставщика сейчас!</h1>
                     <p>и закажи у него товар по завышенной цене!</p>
                  </div>

                  <form class="destinations-form">
                     <div class="input-line">
                     <textarea ref={myRef} type="text" name="destination" class="form-input check-value" placeholder="КАКОЙ ТОВАР ВАС ИНТЕРЕСУЕТ?" /> 
                        <button onClick={myAlert} type="button" name="destination-submit" class="form-submit btn btn-special">Искать товар</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
    
    )
}  

export default Section;