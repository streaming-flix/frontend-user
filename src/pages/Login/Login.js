// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
// import {Link} from "react-router-dom"

// const Login = () => {
//   return (
//     <MDBContainer className='m-3'>
//       <MDBRow>
//         <MDBCol md="6" className='m-auto'>
//           <MDBCard>
//             <MDBCardBody className="mx-4">
//               <div className="text-center">
//                 <h5 className="dark-grey-text mb-2">
//                   <strong>Login to SteamingFlix</strong>
//                 </h5>
//                 <p>Great to see you again!</p>
//               </div>
//               <MDBInput
//               placeholder="email@gmail.com"
//                 label="Your email"
//                 group
//                 type="email"
//                 validate
//                 error="wrong"
//                 success="right"
//               />
//               <MDBInput
//               placeholder="password"
//                 label="Your password"
//                 group
//                 type="password"
//                 validate
//                 containerClass="mb-0"
//               />
//               {/* <p className="font-small blue-text d-flex justify-content-end pb-3">
//                 Forgot
//                 <a href="#!" className="blue-text ml-1">

//                   Password?
//                 </a>
//               </p> */}
//               <div className="text-center mb-3">
//               <MDBBtn color="primary">Sign In</MDBBtn>
//               </div>
//               <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

//                 or Sign in with:
//               </p>
//               <div className="row my-3 d-flex justify-content-center">
//                 <MDBBtn
//                   type="button"
//                   color="white"
//                   rounded
//                   className="mr-md-3 z-depth-1a"
//                 >
//                   <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
//                 </MDBBtn>
//                 <MDBBtn
//                   type="button"
//                   color="white"
//                   rounded
//                   className="z-depth-1a"
//                 >
//                   <MDBIcon fab icon="google-plus-g" className="blue-text" />
//                 </MDBBtn>
//               </div>
//             </MDBCardBody>
//             <MDBModalFooter className="mx-5 pt-3 mb-1">
//               <p className="font-small grey-text d-flex justify-content-end">
//                 Not a member?
//                 < Link to="/Registration" className="blue-text ml-1">

//                   Sign Up
//                 </Link>
//               </p>
//             </MDBModalFooter>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import '../../assets/css/Login.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin(form, history));
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.id]: event.target.value });
    };
    console.log(form)


    return (
      <>
      <Navbar/>
      <div style={{ marginTop: '5em' }}></div>
        <div className="body">
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h5 className="subtitle has-text-black">Login to StreamingFlix</h5>
                            <p className="subtitle has-text-black">Great to see you again!</p>
                            <hr className="login-hr" />
                            <div className="box">
                                {/* <figure className="avatar">
                                    <img
                                        src="https://img.vim-cn.com/ef/26a9d5e371e8010bd4325e4298f254f87b4aa2.png"
                                        alt="brand"
                                    ></img>
                                </figure> */}
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Email
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="Email"
                                                autoFocus=""
                                                id="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={form.email}
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Password
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                placeholder="Kata Sandi"
                                                id="password"
                                                name="password"
                                                onChange={handleChange}
                                                value={form.password}
                                            />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth">
                                        Login
                                    </button>
                                    <br />
                                    <div className="field">
                                        <p className="has-text-grey">
                                            <label>
                                                Not a member?{' '}
                                                <Link to="/Registrasi">
                                                    Sign Up
                                                </Link>
                                            </label>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Login;