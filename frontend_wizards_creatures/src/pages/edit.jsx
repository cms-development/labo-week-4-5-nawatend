import React, { Component } from 'react';
import WUForm from '../components/form'
class EditCreatureForm extends Component {
    state = {
        creatureInfo: this.props.creatureInfo
    }
    render() {
        return (

            <div className="edit__page">
                <WUForm />
            </div>


        );
    }
}

export default EditCreatureForm;