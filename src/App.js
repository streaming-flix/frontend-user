import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage/LandingPage';
import DetailMovie from './pages/DetailMovie/DetailMovie';
import Registrasi from './pages/Registrasi/Registrasi'
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';


function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Router>
      <Route exact path="/Registrasi">
                            <Registrasi />
                        </Route>
     
      <Route exact path="/">
      <LandingPage/>
      </Route>
      <Route exact path="/DetailMovie">
      <DetailMovie /> 
      </Route>
      
     
      <Route exact path="/Login">
      <Login/>
      </Route>
      </Router>
      </Provider>
    </div>

  );
}

export default App;
