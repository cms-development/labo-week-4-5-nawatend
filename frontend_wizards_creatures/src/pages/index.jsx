import React, { Component } from 'react';
import '../App.css';
import Creatures from '../components/creatures'
import { ButtonAdd,ButtonAuth } from '../components/buttons'

import checkJWTValid from '../services/auth'

class HomePage extends Component {




     
    state = {}
    render() {

        if(checkJWTValid()){
            return (
                <div className="App" >
                    <Creatures />                   
                    <ButtonAdd />
                    <ButtonAuth type="out" />
                </div>
            );
        }else{
            return (
                <div className="App" >
                    <Creatures />                  
                    <ButtonAuth type="in"  />
                   
                </div>
            );
        }
        
    }
}

export default HomePage;