import React, { Component } from 'react';
import api from '../services/api'
import checkJWTValid from '../services/auth'
import { Redirect } from 'react-router-dom'
class Login extends Component {
    state = {
        username: '',
        password: '',
        userConfirmed: false

    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        
        api.getToken(this.state.username, this.state.password)
        .then(() => {
            this.setState({ userConfirmed: true })
        })
    }

    UNSAFE_componentWillMount() {
      console.log(checkJWTValid());    

      
    }




    render() {

        if (this.state.userConfirmed || checkJWTValid()) {

            return (<Redirect to="/" />)
        }
        return (
            <div className="form__container">
                <div className="welcome__banner col-10 col-s-10 col-md-10 col-lg-12 col-xl-12">
                    <img id='welcomeBanner' src="./welcome.png" alt="" />
                </div>


                <form onSubmit={this.handleSubmit} className="col-10 col-s-10 col-md-10 col-lg-5 col-xl-5">
                    <label className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12">
                        Username:
                    </label>

                    <input type="text" name="username" onChange={this.handleChange} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12" />

                    <label className="col-12 col-md-12 col-lg-12 col-xl-12">
                        Password:</label>
                    <input type="password" name="password" onChange={this.handleChange} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12" />

                    <input type="submit" value="Login" className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12" />
                </form>
            </div>


        );
    }
}

export default Login;