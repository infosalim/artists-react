import React, { Component } from 'react';
import Banner from './Banner';

import ArtistList from './ArtistList';

const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            artists: ''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
                console.log(json);
            })
    }

    render(){
        return (
            <div>
                <Banner/>
                <ArtistList/>
            </div>
        );
    }
}

export default Home;