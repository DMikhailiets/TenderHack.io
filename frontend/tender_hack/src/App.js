import React from 'react';
import './App.css';
import Section from './components/section/section';
import { Route, BrowserRouter } from 'react-router-dom';
import Main_content from './components/main_content/main_content';


function App(props) {

  // const receive_data = async (e) =>  {
  //   let text = e.preventDefault;
  //   const api_url = await
  //     fetch('http://127.0.0.1:8000/query/' +  text);

  // let myRef = React.createRef();
   
  // let myAlert = async () => {
  //      let text = myRef.current.value;
  //      alert(text);
  //      myRequest(text);
  // }
  // let myRequest = async (text) => {
  //    // const api_url = await fetch(`http:127.0.0.1:8000/api/${text}`);
  //    const api_url = await fetch('http://127.0.0.1:8000/query/' +  text);
    
  //    const data = await api_url.json;
  //    console.log=(data);
  // }

  

  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Route exact path="" render = { () => <Section />}/>
        <Route exact path="/resoults" render = { () => <Section />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
