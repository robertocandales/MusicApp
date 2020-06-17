import {combineReducers} from 'redux';
import artist from './artist.reducer';
import demographic from './demographicReducer';
import user from './user.reducer';


export default combineReducers({
  artist,
  demographic,
  user
});
