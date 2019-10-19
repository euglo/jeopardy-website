import React, { Component } from 'react';
import './jeopardy-tile.css';

class JeopardyTile extends Component {
    constructor() {
        super();
        this.state = {
            clues: []
        }
    }

    componentDidMount() {
        fetch('/api/clues')
            .then(res => res.json())
            .then(clues => this.setState({clues}, () => {
                console.log('Clues..', clues.length, clues);
            }))
    }

    render() {
    return (
        <div>
            <h2>Clues</h2>
            <ul>
                {this.state.clues.map(clue => 
                    <li key={clue.id}>{ clue.answer } - { clue.question }</li>
                )}
            </ul>
        </div>
        );
    }
}

export default JeopardyTile;
