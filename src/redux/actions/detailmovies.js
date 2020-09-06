const GET_BY_ID = "GET_BY_ID";

const getById = (data) => {
    return {
        type: GET_BY_ID,
        data,
    };
};

const fetchGetById = (id) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/movieId/${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };
        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getById(result));
    } catch (error) {
        console.log(error);
    }
};

export { getById, GET_BY_ID, fetchGetById };
