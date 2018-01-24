import React from 'react';
import Map from "./Map";
import {database} from './firebase'
import WebeesPaper from "./WebeesPaper";

class Run extends React.Component {
    state = {
        markers: []
    }

    componentWillMount() {
        this.getRun()
    }

    getRun = () => {
        database.ref(`/runs/${this.props.match.params.id}`)
            .once('value', (snapshot) => {
                this.setState(snapshot.val())
            })
    }


    render() {
        return (
            <div>

                {
                    this.state.markers[0] ?
                        <WebeesPaper>
                            <div style={{width: '100%', height: '50vh'}}>
                                <Map
                                    center={{
                                        lat: this.state.markers[0].lat, lng: this.state.markers[0].lng
                                    }}
                                    zoom={15}
                                    markers={this.state.markers}
                                />
                            </div>

                        </WebeesPaper>
                        :
                        null
                }
                <WebeesPaper>
                    {'Nazwa biegu' + this.state.name}<br/>
                    {'Dlugosc biegu'+ Math.round(('Dystans') + this.state.distance * 1000) / 1000} + 'km'<br/>
                    {'Kategoria' + this.state.category === 'city' ? 'Miejski' : 'Zamiejski'}
                </WebeesPaper>
            </div>
        )
    }
}


export default Run;