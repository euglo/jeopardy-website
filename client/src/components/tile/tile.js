import React, { Component } from 'react';
import Box from '@material-ui/core/Box'

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
            <Box>
                <p>{this.state.answer}</p>
            </Box>
        );
    }
}

export default Tile;