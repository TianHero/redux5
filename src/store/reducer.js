import { combineReducers } from 'redux-immutable';
import { textReducer } from '../components/textlist/store';
import { imgReducer } from '../components/imglist/store';

const reducer = combineReducers({
  text: textReducer,
  img: imgReducer
})

export default reducer;

