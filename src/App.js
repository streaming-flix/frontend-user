import React from 'react';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import DetailMovie from './pages/DetailMovie/DetailMovie';
import Registrasi from './pages/Registrasi/Registrasi';
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
        <Navbar/>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/Login">
            <Login/>
            </Route>
          <Route exact path="/Registrasi">
            <Registrasi />
          </Route>
          <Route exact path="/DetailMovie/:id">
            <DetailMovie /> 
          </Route>
          <Footer/>
        </Router>
      </Provider>
    </div>

  );
}

export default App;
