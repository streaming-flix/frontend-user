import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';

const GET_USER_LOGIN = 'GET_USER_LOGIN';
const REGISTER_USER = 'REGISTER_USER';

const getUserLogin = (payload) => {
    return { type: GET_USER_LOGIN, payload };
};

const registerUser = (payload) => {
    return { type: REGISTER_USER, payload };
};

const userLogin = (form, history) => async (dispatch) => {
    try {
        const url = 'http://localhost:5002' ;
        const options = {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-type': 'application/json',
            },
        };
        console.log(url, 'url')
        const response = await fetch(`${url}/api/user/login`, options);
        const result = await response.json();
        await jwt_decode(result.result);

        if (response.status === 200) {
            Swal.fire({
                title: 'Berhasil Login!',
                text: '',
                icon: 'success',
                // confirmButtonText: 'Cool',
            });
            localStorage.setItem('token', result.result);
            dispatch(getUserLogin(result));
            history.push('/profile');
        } else if (response.status === 403) {
            localStorage.clear();
        }
    } catch (error) {
        Swal.fire({
            title: 'Email atau Password Salah!',
            text: '',
            icon: 'error',
        });
    }
};

const register = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_API}/user/`;
    const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
        },
    };

    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Pendaftaran Berhasil!',
            text: '',
            icon: 'success',
            // confirmButtonText: 'Cool',
        });
        history.push('/login');
    } else {
        Swal.fire({
            title: 'Email Sudah Terdaftar',
            text: '',
            icon: 'error',
            // confirmButtonText: 'Cool',
        });
    }
    dispatch(registerUser(result));
};


export {
    getUserLogin,
    GET_USER_LOGIN,
    userLogin,
    REGISTER_USER,
    register,
    registerUser,
};