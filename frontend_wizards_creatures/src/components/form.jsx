import React, { Component } from 'react';

import api from '../services/api'
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";

class Form extends Component {

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {

        //proper data for creature data as POST BODY
        const creatureData = {
            title: this.state.title,
            fields: {
                xp: this.state.xp,
                spell: this.state.spell,
                description: this.state.description,
                confoundable: this.state.confoundable
            },
            status: "publish",
            featured_media: this.state.imageId
        }

        //id from url
        const id = this.props.match.params.id;

        if (id !== 'new') {
            api.updateCreatureById(id, creatureData, localStorage.getItem('wu_token'))
                .then(() => {
                    this.setState({ goHome: true })
                })

        } else {

            api.createNewCreature(creatureData, localStorage.getItem('wu_token'))
                .then(() => {
                    this.setState({ goHome: true })
                })

        }

        event.preventDefault();
    }

    showImagePreview = (event) => {

        let image = document.getElementById('image_preview');
        image.src = URL.createObjectURL(event.target.files[0]);


        let imageData = new FormData();
        imageData.append('file', event.target.files[0])

        api.uploadToMedia(imageData, event.target.files[0].name, localStorage.getItem('wu_token'))
            .then((data) => {
                this.setState({ imageId: data })
            })


    }


    getCurrentCreature = async () => {
        const id = this.props.match.params.id;

        if (id !== 'new') {
            await api.getCreatureById(id).then(response => {
                this.setState({ type: "edit" })
                this.setState({ title: response.title.rendered })
                this.setState({ description: response.acf.description })
                this.setState({ spell: response.acf.spell })
                this.setState({ xp: response.acf.xp })
                this.setState({ confoundable: response.acf.confoundable })
                this.setState({ imageLink: response.fimg_url })
                this.setState({ imageId: response.featured_media })
            }).catch()

            //console.log(this.state.creatureInfo)
        } else {
            this.setState({ type: "new" })
            //console.log('here create new creature')
        }
    }

    UNSAFE_componentWillMount() {
        this.getCurrentCreature()      
    }

    state = {
        goHome: false,
        imageId: "",
        type: "",
        title: "",
        description: "",
        spell: "",
        xp: "",
        confoundable: "",
        imageLink: ""
    }
    render() {

        if (this.state.goHome) {

            return (<Redirect to="/" />)
        }

        return (

            <div className="form__container">

                <form onSubmit={this.handleSubmit} className="col-10 col-s-10 col-md-10 col-lg-5 col-xl-5">
                    <label className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12">
                        Creature Name:
                </label>

                    <input type="text" name="title" onChange={this.handleChange} defaultValue={this.state.title} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-8" />



                    <label className="col-12 col-md-12 col-lg-12 col-xl-12">
                        Image:
                </label>

                    <input type="file" name="creature_image" onChange={this.showImagePreview} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-8" />


                    <label className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12">
                        Description: </label>
                    <textarea rows="8" maxLength="200" name="description" onChange={this.handleChange} defaultValue={this.state.description} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-8" />

                    <label className="col-12 col-md-12 col-lg-12 col-xl-12">
                        Spell:</label>
                    <input type="text" name="spell" onChange={this.handleChange} defaultValue={this.state.spell} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-8" />


                    <label className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12">
                        XP: </label>
                    <input type="text" name="xp" onChange={this.handleChange} defaultValue={this.state.xp} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-8" />


                    <label className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-12">
                        Confoundable: </label>
                    <input type="text" name="confoundable" onChange={this.handleChange} defaultValue={this.state.confoundable} className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-8" />


                    <input type="submit" value="Save" className="col-12 col-s-12 col-md-12 col-lg-12 col-xl-8" />
                </form>


                <div className="image__preview col-10 col-s-10 col-md-10 col-lg-5 col-xl-5">
                    <img id="image_preview" src={this.state.imageLink} alt="" />
                </div>
            </div>
        );
    }
}

export default withRouter(Form);