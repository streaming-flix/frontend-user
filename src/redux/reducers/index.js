import { combineReducers } from "redux";
import Registration from "./Registration";
import GetAllMovies from "./GetAllMovies";
import SearchMovie from "./SearchMovie";
import detailmovie from "./detailmovie";
export default combineReducers({
    Registration,
    GetAllMovies,
    SearchMovie,
    detailmovie,
});
