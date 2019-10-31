import React, { Component } from 'react';
import api from '../services/api'
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class DetailPage extends Component {



    state = {

        title: "",
        description: "",
        spell: "",
        xp: "",
        confoundable: "",
        imageLink: ""
    }


    UNSAFE_componentWillMount() {
        this.getCurrentCreatureInfo()

    }

    getCurrentCreatureInfo = async () => {

        const id = this.props.match.params.id;
        await api.getCreatureById(id).then(response => {

            this.setState({ title: response.title.rendered })
            this.setState({ description: response.acf.description })
            this.setState({ spell: response.acf.spell })
            this.setState({ xp: response.acf.xp })
            this.setState({ confoundable: response.acf.confoundable })
            this.setState({ imageLink: response.fimg_url })

        }).catch()
    }

    goHomePage = () => {
        this.props.history.push('/')
    }

    render() {


        return (
            <div className="detail__page">
                <div onClick={this.goHomePage} className="goHome"><FontAwesomeIcon icon="arrow-left" /> Home</div>
                <div className="detail__container col-10 col-s-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="col-10 col-s-10 col-md-10 col-lg-5 col-xl-5">
                        <div className="card_text_container col-12 col-s-12 col-md-12 col-lg-10 col-xl-12">
                            <h1>
                                {this.state.title}
                            </h1>
                            <p>
                                {this.state.description}
                            </p>
                            <ul>
                                <li><strong>XP: </strong> {this.state.xp}</li>
                                <li><strong>Spell: </strong> {this.state.spell}</li>
                                <li><strong>Confoundable: </strong> {this.state.confoundable}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="detail__image col-10 col-s-10 col-md-10 col-lg-5 col-xl-5">
                        <img src={(this.state.imageLink !== false) ? this.state.imageLink : ""} alt="" />
                    </div>
                </div>


            </div>


        );
    }
}

export default withRouter(DetailPage);