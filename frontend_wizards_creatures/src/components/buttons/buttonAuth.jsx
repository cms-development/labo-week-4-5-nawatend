import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from "react-router-dom";

class ButtonAuth extends Component {

    
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }
    state = {}

    goLoginPage = () => {
        this.props.history.push('/login')
    }

    goHomePage = () => {
        localStorage.removeItem('wu_token')

       // this.props.history.push('/')
       window.location.reload();
       console.log('out')
    }

    render() {
        return (

                <div className="btn__login" onClick={(this.props.type === 'in') ? this.goLoginPage : this.goHomePage}>
                    <FontAwesomeIcon icon= {(this.props.type === 'in') ? "sign-in-alt" :  "sign-out-alt" }/>
                </div>           
        );
    }
}

export default withRouter(ButtonAuth);