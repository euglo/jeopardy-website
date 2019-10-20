import React, { Component } from 'react';
import Tile from '../tile/tile';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
//import './tile-board.css';

class TileBoard extends Component {
    constructor(props) {
        super(props);
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
        <Container maxWidth="lg">
            <h2>Clues</h2>
            <Grid container direction="row" justify="center" alignItems="center" spacing="3"> 
                {this.state.clues.map(clue => 
                    <Grid item xs={12} sm={6} lg={3} xl={2}>
                        <Tile question={clue.question} answer={clue.answer} color="dark"/>
                    </Grid>
                )}
            </Grid>
        </Container>
        );
    }
}

export default TileBoard;
