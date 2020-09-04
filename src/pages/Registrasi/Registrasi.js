import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { register} from '../../redux/actions/Registration';
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
                title: 'Please complete the registration form',
                text: '',
                icon: 'error',
                // confirmButtonText: 'Cool',
            });
        } else {
            if (form.password.length < 6) {
                Swal.fire({
                    title: 'Password must be more than 6 characters',
                    text: '',
                    icon: 'error',
                    // confirmButtonText: 'Cool',
                });
            } else {
                await dispatch(register(form, history));
            }
        }
    };
console.log(form)
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div style={{marginTop:'5em', justifyContent:'center'}} className="body">
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
                                    <button type="submit" className="button is-block is-info is-fullwidth">
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