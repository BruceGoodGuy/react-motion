import React, {Component} from 'react';
import {label, button} from './../../constants/main';
import './login.css';

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.changeInput = this.changeInput.bind(this)
        this.doLogin = this.doLogin.bind(this)
    }

    changeInput = (event) =>{
        let {name, value} = event.target
        this.setState ({
            [name] : value
        })
    }
    
    doLogin = (event) =>{
        event.preventDefault();
        this.props.letSigin(this.state)
    }
  render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">{label.MOTION}</h5>
                            <form className="form-signin" onSubmit={this.doLogin}>
                                <div className="form-label-group">
                                    <input onChange={this.changeInput} type="email" id="inputEmail" className="form-control" placeholder="{place_holder.EMAIL_ADDRESS}" required autoFocus name="email" />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                    
                                <div className="form-label-group">
                                    <input onChange={this.changeInput} type="password" id="inputPassword" className="form-control" placeholder="{place_holder.PASSWORD}" required name="password"/>
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">{button.SIGN_IN}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;