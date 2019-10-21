import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import blue from '@material-ui/core/colors/blue'

const primary = blue[300];

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
            answer: this.props.answer
        };
    }

    render() {
        return (
            <Card style={{padding:"30px 0"}}>
                <div>
                <p>{this.state.answer}</p>
                </div> 
            </Card>
        );
    }
}

export default Tile;