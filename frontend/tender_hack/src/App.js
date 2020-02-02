import React from 'react';
import './App.css';
import Section from './components/section/section';
import { Route, BrowserRouter } from 'react-router-dom';
import Main_content from './components/main_content/main_content';


function App(props) {

  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Route exact path="/search" render = { () => <Section />}/>
        <Route exact path="/resoults" render = { () => <Section />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
