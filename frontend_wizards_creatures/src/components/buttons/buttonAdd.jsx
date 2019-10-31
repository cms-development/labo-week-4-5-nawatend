import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from "react-router-dom";

class ButtonAdd extends Component {

    
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }
    state = {}

    goCreatePage = () => {
        this.props.history.push('/edit/new')
    }
    render() {
        return (

                <div className="btn__create" onClick={this.goCreatePage}>
                    <FontAwesomeIcon icon="plus" />
                </div>           
        );
    }
}

export default withRouter(ButtonAdd);