// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
// // import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';
// import {Link} from "react-router-dom"

// const Registration = () => {
//   return (
//     <MDBContainer className='m-3'>
//     <MDBRow>
//       <MDBCol md="6" className='m-auto'>
//         <MDBCard>
//           <MDBCardBody className="mx-4">
//             <div className="text-center">
//               <h5 className="dark-grey-text mb-2">
//                 <strong>Sign up FREE</strong>
//               </h5>
//               <p>Simply sign up and we'll give you FREE access to VIP!</p>
//             </div>
//             <MDBInput
//               label="Your email"
//               group
//               type="email"
//               validate
//               error="wrong"
//               success="right"
//             />
//             <MDBInput
//               label="Your password"
//               group
//               type="password"
//               validate
//               containerClass="mb-0"
//             />
//             <div className="text-center mb-3">
//             <MDBBtn color="primary">Sign Up</MDBBtn>
//             </div>
//             <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

//               or Sign up with:
//             </p>
//             <div className="row my-3 d-flex justify-content-center">
//               <MDBBtn
//                 type="button"
//                 color="white"
//                 rounded
//                 className="mr-md-3 z-depth-1a"
//               >
//                 <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
//               </MDBBtn>
//               <MDBBtn
//                 type="button"
//                 color="white"
//                 rounded
//                 className="mr-md-3 z-depth-1a"
//               >
//                 <MDBIcon fab icon="twitter" className="blue-text" />
//               </MDBBtn>
//               <MDBBtn
//                 type="button"
//                 color="white"
//                 rounded
//                 className="z-depth-1a"
//               >
//                 <MDBIcon fab icon="google-plus-g" className="blue-text" />
//               </MDBBtn>
//             </div>
//           </MDBCardBody>
//           <MDBModalFooter className="mx-5 pt-3 mb-1">
//             <p className="font-small grey-text d-flex justify-content-end">
//               Have an account?
//               < Link to="/Login" className="blue-text ml-1">

//                 Sign In
//               </Link>
//             </p>
//           </MDBModalFooter>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   </MDBContainer>
//   );
// };

// export default Registration;

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/Registration';
import { useHistory, Link } from 'react-router-dom';
import '../../assets/css/Login.css';
// import Registration from '../../redux/reducers/Registration';

function Registrasi() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            form.name === '' ||
            form.email === '' ||
            form.password === '' 
        ) {
            Swal.fire({
                title: 'Harap Selesaikan Form Registrasi',
                text: '',
                icon: 'error',
                // confirmButtonText: 'Cool',
            });
        } else {
            if (form.password.length < 6) {
                Swal.fire({
                    title: 'Password harus lebih dari 6 karakter',
                    text: '',
                    icon: 'error',
                    // confirmButtonText: 'Cool',
                });
            } else {
                await dispatch(register(form, history));
            }
        }
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div className="body">
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h5 className="subtitle has-text-black">
                            Sign up FREE
                            </h5>
                            <p>Simply sign up and we'll give you FREE access to VIP!</p>
                            <hr className="login-hr" />
                            <div className="box">
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Name
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Your Name"
                                                autoFocus=""
                                                id="name"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
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
                                                placeholder="Your Email"
                                                autoFocus=""
                                                id="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
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
                                                placeholder="Your Password"
                                                id="password"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth">
                                        Sign Up{' '}
                                        <i
                                            className="fa fa-sign-in"
                                            aria-hidden="true"
                                        ></i>
                                    </button>
                                    <br />
                                    <div className="field">
                                        <p className="has-text-grey">
                                            <label>
                                                Have an account?{' '}
                                                <Link to="/Login">Login</Link>
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
    );
}

export default Registrasi;