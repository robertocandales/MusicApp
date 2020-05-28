import {combineReducers} from 'redux';
import artist from './artist.reducer';
import demographic from './demographicReducer';

export default combineReducers({
  artist,
  demographic,
});
