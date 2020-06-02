import {combineReducers} from 'redux';
import artist from './artist.reducer';
import demographic from './demographicReducer';
//import artist from './artistsReducers';

export default combineReducers({
  artist,
  demographic,
});
