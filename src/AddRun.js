import React, {Component} from 'react'
import {render} from 'react-dom'
import GoogleMapReact from 'google-map-react'

const Pin = () => <div><i className="material-icons" style={{color: 'red'}}>room</i></div>

class Map extends React.Component {
    render() {
        return (
            <GoogleMapReact
                apiKey={'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc'}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onClick={this.props.placeMarker}
            >
                {
                    this.props.markers.map((marker) =>
                        <Pin
                            key={marker.key}
                            lat={marker.lat}
                            lng={marker.lng}
                        />
                    )
                }
            </GoogleMapReact>
        )
    }
}


class AddRun extends React.Component {
    state = {
        markers: [],
        name: '',
        type: ''
    }

    save = () => {
        fetch('https://my-project-15d7d.firebaseio.com/.json', {
            method: 'POST',
            body: JSON.stringify(this.state.markers),
            headers: ({'Content-Type': 'application/json'})
        })
    }

    placeMarker = ({lat, lng}) => {
        const markerData = {lat, lng, key: Date.now()}
        this.setState({
            markers: this.state.markers.concat(markerData)
        })
    }

    render() {

        return (
            <div style={{width: '60vw', height: '60vh'}}>
                <Map
                    center={{lat: 51.216276, lng: 22.631233}}
                    zoom={15}
                    markers={this.state.markers}
                    placeMarker={this.placeMarker}
                />
            </div>
        )
    }
}

export default AddRun;