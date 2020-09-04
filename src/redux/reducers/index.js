import { combineReducers } from 'redux';
import Registration from './Registration';
import GetAllMovie from './GetAllMovies';
import SearchMovie from './SearchMovie';

export default combineReducers({
    Registration,
    GetAllMovie,
    SearchMovie,
});