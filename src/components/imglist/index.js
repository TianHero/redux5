import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store';

class ImgList extends Component {

  render() {
    const { imgList, getMore } = this.props;
    return (
      <div style={{ float: 'left', width: '400px', border: '1px solid #eee' }}>
        <ul>
          {
            imgList.map((item, index) => {
              return (
                <li key={index}><img src={item} width='80px' alt=""/></li>
              )
            })
          }
        </ul>
        <button onClick={getMore}>请求图片数据</button>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    imgList: state.getIn(['img','imgList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMore() {
      dispatch(actionCreators.getInitList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgList);
