import React from 'react';
import Map from "./Map";
import {database} from '../firebase'
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
                console.log(snapshot.val())
                this.setState(snapshot.val())
                console.log(this.props.match.params)
            })
    }

    render() {
        return (
            <div>

                {
                    this.state.markers[0] ?
                        <div>
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
                            <WebeesPaper>

                                <h2> {'Nazwa biegu: ' + this.state.name}</h2><br/>
                                <h2>{'Długość biegu: ' + Math.round(this.state.distance * 1000) / 1000} km </h2> <br/>
                                <h2>{'Kategoria: ' + this.state.category === 'city' ? 'Miejski' : 'Zamiejski'}</h2>
                            </WebeesPaper>
                        </div>
                        :
                        <WebeesPaper>
                            <h1>Ładowanie...</h1>
                        </WebeesPaper>
                }
            </div>
        )
    }
}


export default Run;