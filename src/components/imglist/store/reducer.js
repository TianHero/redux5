import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  imgList: []
})

// reducer 可以接收state，但是不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
         
      // return state.merge({
      //   list: state.get('list').concat(fromJS(action.value))
      // });
      return state.set('imgList', fromJS(state.get('imgList').concat(action.value)));
    default:
      return state;
  }
}
