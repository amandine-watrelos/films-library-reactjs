import React from "react";

class Film extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>{this.props.name}</h1>);
    }

}

export default Film;
