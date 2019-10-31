import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditPage from '../pages/edit'
import DetailPage from '../pages/detail'
import LoginPage from '../pages/login'
import HomePage from '../pages';

class WURouter extends Component {
    state = {}
    render() {
        return (

            <Router>
                    <Switch>
                    <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/edit/:id">
                            <EditPage />
                        </Route>

                        <Route exact path="/edit/new">
                            <EditPage />
                        </Route>

                        
                        <Route exact path="/detail/:id">
                            <DetailPage />
                        </Route>

                        <Route exact path="/login">
                            <LoginPage />
                        </Route>
                    </Switch>
            </Router>
        );
    }
}

export default WURouter;