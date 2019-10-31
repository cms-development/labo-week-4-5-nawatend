import React, { Component } from 'react';
import '../scss/main.scss';
import { WUButton } from './buttons'
import { withRouter } from "react-router-dom";
import checkJWTValid from '../services/auth'

class CardCreature extends Component {

    state = {
        creature: this.props.creatureInfo
    }


    goDetailPage = () => {
        this.props.history.push('/detail/' + this.state.creature.id)
    }

    render() {

        if(checkJWTValid()){

        

        return (
            <div id={`creature${this.state.creature.id}`} className="card col-7 col-s-7 col-md-7 col-lg-7 col-xl-6">
                <div id="goDetail" onClick={this.goDetailPage}>
                    <div className="card_image_container col-12 col-md-12 col-lg-10 col-xl-12">
                        <img src={(this.state.creature.fimg_url !== false) ? this.state.creature.fimg_url : ""} alt="" />
                    </div>
                    <div className="card_text_container col-12 col-md-12 col-lg-10 col-xl-12">
                        <h2 >
                            {this.state.creature.title.rendered}
                        </h2>
                        <p>
                            {this.state.creature.acf.description}
                        </p>
                        <ul>
                            <li><strong>XP: </strong> {this.state.creature.acf.xp}</li>
                            <li><strong>Spell: </strong> {this.state.creature.acf.spell}</li>
                            <li><strong>Confoundable: </strong> {this.state.creature.acf.confoundable}</li>
                        </ul>
                    </div>
                </div>
                <div className="card__buttons">
                    <WUButton creatureId={this.state.creature.id} text="Edit" type="default" />
                    <WUButton creatureId={this.state.creature.id} text="Delete" type="danger" />
                </div>

            </div >
        );}else{

            return (
                <div id={`creature${this.state.creature.id}`} className="card col-7 col-s-7 col-md-7 col-lg-7 col-xl-6">
                    <div id="goDetail" onClick={this.goDetailPage}>
                        <div className="card_image_container col-12 col-md-12 col-lg-10 col-xl-12">
                            <img src={(this.state.creature.fimg_url !== false) ? this.state.creature.fimg_url : ""} alt="" />
                        </div>
                        <div className="card_text_container col-12 col-md-12 col-lg-10 col-xl-12">
                            <h2 >
                                {this.state.creature.title.rendered}
                            </h2>
                            <p>
                                {this.state.creature.acf.description}
                            </p>
                            <ul>
                                <li><strong>XP: </strong> {this.state.creature.acf.xp}</li>
                                <li><strong>Spell: </strong> {this.state.creature.acf.spell}</li>
                                <li><strong>Confoundable: </strong> {this.state.creature.acf.confoundable}</li>
                            </ul>
                        </div>
                    </div>
                    
                </div >
            );
            
        }
    }
}

export default withRouter(CardCreature);

