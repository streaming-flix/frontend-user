import Swal from 'sweetalert2';
// import jwt_decode from 'jwt-decode';

const GET_USER_LOGIN = 'GET_USER_LOGIN';
const REGISTER_USER = 'REGISTER_USER';

const getUserLogin = (payload) => {
    return { type: GET_USER_LOGIN, payload };
};

const registerUser = (payload) => {
    return { type: REGISTER_USER, payload };
};

const userLogin = (formData, history) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/user/login`;
        const options = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json',
            },
        };
       
        const response = await fetch(url, options);
        const result = await response.json();
        // await jwt_decode(result);

        if (response.status === 200) {
            Swal.fire({
                title: 'Login succes',
                text: '',
                icon: 'success',
                // confirmButtonText: 'Cool',
            });
            localStorage.setItem("user", JSON.stringify(result));
            dispatch(getUserLogin(result));
            history.push('/');
        } else if (response.status === 403) {
            localStorage.clear();
        }
    } catch (error) {
        console.log(error, 'error')
        Swal.fire({
            title: 'Email or Password wrong!',
            text: '',
            icon: 'error',
        });
    }
};

const register = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/user`;
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
            title: 'Register succes!',
            text: '',
            icon: 'success',
            // confirmButtonText: 'Cool',
        });
        history.push('/login');
    } else {
        Swal.fire({
            title: 'Email already reagister',
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