import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import User from './modules/user';
import Role from './modules/role';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" onClick={() => {
                            window.location.hash = '/';
                        }}/>
                        <div className='App-router'>
                            <Link className='App-Link' to='/user'>User</Link>
                            <span>|</span>
                            <Link className='App-Link' to='/role'>Role</Link>
                        </div>
                        <div className='App-content'>
                            <Switch>
                                <Route path='/user' component={User}/>
                                <Route path='/role' component={Role}/>
                                <Route exact path='/' render={() => <div></div>}/>
                            </Switch>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}
export default App;
