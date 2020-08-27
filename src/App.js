import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage/LandingPage';
import DetailMovie from './pages/DetailMovie/DetailMovie';
import Registration from './pages/Registration/Registration'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/Registration">
                            <Registration />
                        </Route>
      {/* <h1>Hello</h1> */}
      {/* <Navbar/> */}

      {/* <Jumbo/> */}
      {/* <LandingPage/> */}
      {/* <DetailMovie /> */}
      <Route exact path="/Login">
      <Login/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
