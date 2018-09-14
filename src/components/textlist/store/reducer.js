import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: ['windows', 'mac', 'linux']
})

// reducer 可以接收state，但是不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
         
      // return state.merge({
      //   list: state.get('list').concat(fromJS(action.value))
      // });
      return state.set('list', fromJS(state.get('list').concat(action.value)));
    default:
      return state;
  }
}
