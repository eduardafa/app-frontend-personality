import React, { Component } from 'react';
import axios from 'axios';
import '../components/Personalities.css';

export default class Personalities extends Component {
    state = {
        personalities: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/allpersonalities')
            .then(res => {
                const personalities = res.data;
                this.setState({ personalities })
            })
    }

    render() {
        return (
            <div>
                {this.state.personalities.map((p, id )=>
                    <div className="CardPersonalities" key={id}>
                        <h3>{p.name}</h3>
                        <p>{p.history}</p>
                    </div>)}
            </div>
        );
    }
}