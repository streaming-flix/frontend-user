const SEARCH_MOVIE =  'SEARCH_MOVIE';

const findMovie = (data) => {
    return {
        type: SEARCH_MOVIE,
        data,
    };
};

const fetchSearchMovie = (input) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/findbysearch/?title=${input}`;
        // const token = JSON.parse(localStorage.getItem('user')).token;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(findMovie(result));
    } catch (error) {
        console.log(error);
    }
};

export { fetchSearchMovie, SEARCH_MOVIE, findMovie };