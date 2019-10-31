import React, { Component } from 'react';
import '../../scss/components/button.sass'
import { withRouter } from "react-router-dom";
import api from '../../services/api'

class WUButton extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    state = {

        type: this.props.type,
        text: this.props.text,
    }

    goEditPage = () => {
        this.props.history.push('/edit/' + this.props.creatureId)
    }

    deleteCreature = () => {

        api.deleteCreature(this.props.creatureId, localStorage.getItem("wu_token"))

    }
    render() {
        return (
            <div className={"WUButton btn-" + this.props.type} onClick={(this.props.type === "danger") ? this.deleteCreature : this.goEditPage}>
                {this.state.text}
            </div>);
    }
}

export default withRouter(WUButton);