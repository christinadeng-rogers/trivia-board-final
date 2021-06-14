import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/quiz" component={Quiz}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
