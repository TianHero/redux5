import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store';

class TextList extends Component {

  render() {
    const { list, getMore } = this.props;
    return (
      <div style={{ float: 'left', width: '400px', border: '1px solid #eee' }}>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
        <button onClick={getMore}>请求数据</button>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['text','list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMore() {
      dispatch(actionCreators.getInitList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextList);
