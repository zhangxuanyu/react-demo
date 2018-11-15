import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';//react-dom
// import MyRequest from './request.js'//自己封装的请求
import $ from 'jquery'//引入jquery
// import MyRouter from './router.js';//自己封装的路由
import MyRouter from './reactroute.js'

import Myfoot from './compontent/myfoot.js';//脚


class App extends Component {
  render() {
    
    return (
     <div>
       <MyRouter  ></MyRouter>
          <Myfoot />
     </div>
          
      
    );
  }
}

export default App;
