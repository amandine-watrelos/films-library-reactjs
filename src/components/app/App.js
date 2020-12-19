import NavBar from "../navbar/NavBar";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FilmDetails from "../film/details/FilmDetails";
import Home from "../home/Home";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appName : 'Films library'
        }
    }

    render() {
        return (
            <Router>
                <NavBar appName={this.state.appName}/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/details/:id' component={FilmDetails} />
                </Switch>
            </Router>
        );
    }

}

export default App;
