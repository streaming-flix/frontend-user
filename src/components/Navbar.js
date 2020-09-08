import React, {useEffect, useState} from "react";

import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
import { fetchGetAllMovies, fetchSearchMovie} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


function Navbar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const movies = useSelector((state) => state.SearchMovie);
console.log(movies);
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (input === '') {
      dispatch(fetchGetAllMovies());
    }else {
      dispatch(fetchSearchMovie(input));
    }
  }, [input, dispatch]);
    return(
        <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='fixed-top'>
        <ReactBootStrap.Navbar.Brand ><Link to='/'>StreamingFlix</Link></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link ><Link to='/'>Home</Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">TV Shows</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Movies</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl type="text" placeholder="Search" value={input}
                                    onChange={handleChange} className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-light">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link> <Link to="/Login">Login</Link></ ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
 );
}

export default Navbar;