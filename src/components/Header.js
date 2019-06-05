import React, { Component } from 'react';
import '../css/index.css'
class Header extends Component {
    render() {
        return (
            <div className="container-fluid top">
                <div className="row">
                    <h1 className="col-md-4 logo">fakebook</h1>
                    <form className="rounded mx-auto d-block form-login">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="input-login"><label htmlFor="exampleInputEmail1" >Email</label></td>
                                    <td className="input-login"><label htmlFor="exampleInputPassword1">Password</label></td>
                                </tr>
                                <tr>
                                    <td className="input-login"><input type="email" id="exampleInputEmail1" /></td>
                                    <td className="input-login"><input type="password" id="exampleInputPassword1" /></td>
                                    <td className="input-login"> <button type="submit" className="btn-login">Log In</button></td>
                                </tr>
                                <tr>
                                    <td className="input-login"></td>
                                    <td className="input-login"><div><a href="#1" className="forgot-login">Forgotten account?</a></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Header;
