import React, { Component } from 'react';
import '../css/index.css'

class Main extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <p className="text-bold">Recent logins</p>
                        <img src='https://lorempixel.com/800/400/food/1' width='350px' style={{float:"left"}}/>
                        
                    </div>
                    <div className="col s6">
                        <p className="text-bold">
                        Create a new account    
                        </p>                        
                        <div>
                        It's free and always will be.   
                        </div>
                        <form >
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate input" placeholder="First Name" />
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate input" placeholder="Last Name" />
                            </div>
                            <div className="input-field col s12">
                                <input id="email1" type="email" className="validate input" placeholder="Email"/>
                            </div>
                            <div className="input-field col s12 getCode">
                               <form>
                                <input id="email2" type="text" className="validate input" placeholder="Enter Code Email"/>
                                <div className="btn-getCode">
                                    <button className="btn waves-effect waves-light getcode" type="submit" style={{float: "right"}}>Get Code</button>
                                    <i className="fas fa-hand-point-right"></i>  
                                </div>
                                <div className="mess red-text"></div>
                               </form>
                            </div>
                            <div className="input-field col s12">
                                <input id="password1" type="password" className="validate input" placeholder="Password" />
                            </div> 
                            <div className="col s12">
                                <p className="input-field" >Birthday</p>
                                <input type="date" className="datepicker validate" />
                            </div>
                            <div className="col s12">
                                <label className="col s6">
                                    <input className="with-gap" name="group1" type="radio" defaultChecked />
                                    <span>Male</span>
                                </label>
                                <label className="col s6">
                                    <input className="with-gap" name="group1" type="radio" />
                                    <span>Female</span>
                                </label>
                            </div>
                           <div className="col s12">
                           <button className="btn waves-effect waves-light signup" type="submit" name="action">Sign Up
                            </button>
                           </div>

                        </form>
                    </div>
                </div>
            </div>


        );
    }
}
export default Main;
