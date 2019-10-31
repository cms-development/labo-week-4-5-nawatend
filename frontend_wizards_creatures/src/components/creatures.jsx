import React, { Component } from 'react';
import CardCreature from './cardCreature'
import '../index.css'

import api from '../services/api'

class Creatures extends Component {

    constructor() {
        super()

        api.getCreatures()
            .then(response => {
                this.setState({ creatures: response })
                //console.log(response)
            }).catch()

    }

    state = {
        creatures: []
    }

    render() {
        return (
            <div className='container__creatures'>
                {this.state.creatures.map(creature => (
                    <CardCreature key={creature.id} creatureInfo={creature} />
                ))}
            </div>


        );
    }

}

export default Creatures;