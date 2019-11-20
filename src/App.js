import React from 'react';
import Header from './common/header/index';
import {GlobalStyle} from "./style";
import {GlobalStyleFont} from "./statics/iconfont/iconfont";
import store from './store/index';
import {Provider} from 'react-redux';


function App() {
  return (
      <Provider store={store}>
          <GlobalStyle/>
          <GlobalStyleFont/>
          <Header/>
      </Provider>
  );
}

export default App;
