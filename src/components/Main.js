import React, { Component } from 'react';
import '../css/index.css'

class Main extends Component {

    render() {
        return (
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 left">
                        <div className="title">Recent logins</div>
                        <div className="action">Click your picture or add an account.</div>
                        <img src='https://lorempixel.com/800/400/food/1' width='350px' />
                    </div>
                    <div className="col-md-5 right">
                        <div className="title">Create a new account</div>
                        <div className="action">It's free and always will be.</div>
                        <form className="rounded mx-auto d-block form-signup">
                            <table cellPadding="5" >
                                <tbody>
                                    <tr>
                                        <td ><input className="input-signup" type="text" placeholder="First Name"></input></td>
                                        <td ><input className="input-signup" type="text" placeholder="Last Name"></input></td>
                                    </tr>
                                    <tr >
                                        <td colSpan="2"><input className="input-signup" type="email" id="exampleInputEmail2" placeholder="Email" /></td>
                                    </tr>
                                    <tr className="getCode" >
                                        <td>
                                            <input className="input-signup" type="text" id="exampleInputEmail3" placeholder="Enter Code Email" />
                                        </td>
                                        <td> <i className="far fa-hand-point-right"></i> <button type="button" className="btn-getcode">Get Code</button></td>
                                    </tr>
                                    <tr>
                                        <td className="mess" colSpan="2"></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><input className="input-signup" type="password" id="exampleInputPassword2" placeholder="Password" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>Birthday</div>
                                            <input type="date"></input>
                                        </td>
                                        <td>
                                            <div>Sex</div>
                                            <select>
                                                <option>Male</option>
                                                <option>Feale</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <button type="submit" className="btn-signup">Sign Up</button> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;
