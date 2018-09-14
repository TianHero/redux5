import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import TextList from './components/textlist';
import ImgList from './components/imglist'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <TextList />
          <ImgList />
        </div>
      </Provider>
    );
  }
}

export default App;
