import * as actionTypes from './actionTypes';
import axios from 'axios';

// 
export const changeList = (value) => ({
  type: actionTypes.CHANGE_LIST,
  value
})

// 这个action是组件中调用的，和saga关联，并执行异步方法
export const getInitList = () => {
  return (dispatch) => {
    axios.get('/api/imgList.json').then((res) => {
      dispatch(changeList(res.data.data))
    }).catch((err) => {
      console.log(err);
    })
  }
}