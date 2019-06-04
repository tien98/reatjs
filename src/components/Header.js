import React, {Component} from 'react';
import '../css/index.css'
class Header extends Component {
    render() {
        return (
        <div className="row top">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s6 logo">
                    Fakebook
                </div>
                <div className="input-field col s2 text">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s2 text">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s2">
                <a className="waves-effect waves-light btn" href="##">LogIn</a>
                </div>
            </div>
            </form>
            </div>  
        );
    }
}
export default Header;
