import React, { Component } from 'react';
import {IndexRedirect} from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Myhead from './compontent/myhead.js';//头
import { createBrowserHistory } from 'history';

import News from './page/news'
import Data from './page/data'


// @inject('counte')
// @observer
class router extends React.Component{
        render(){
            return(
                <Router>
                    <div className="allWrap">
                        <Myhead />
                        <Switch>
                            <Route exact path='/' component={News}></Route>
                            <Route path='/data' component={Data}></Route>
                        </Switch>
                    </div>
                </Router>
            )
        }    
    }
export default router