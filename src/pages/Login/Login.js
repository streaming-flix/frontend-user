import React, { useState } from 'react';
import '../../assets/css/Login.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });
// console.log(history, 'history')
// console.log(dispatch, 'dispatch')
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin(form, history));
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    // console.log(form)


    return (
      <>
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
                                                placeholder="password"
                                                id="password"
                                                name="password"
                                                onChange={handleChange}
                                                value={form.password}
                                            />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth">
                                        Login{' '}
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