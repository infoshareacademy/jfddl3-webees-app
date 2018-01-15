import React, {Component} from 'react'
import { render } from 'react-dom'
import GoogleMapReact from 'google-map-react'

const Pin = () => <div><i className="material-icons" style={{color: 'red'}}>room</i></div>

class Map extends React.Component {
    state = {
        markers: []
    }

    placeMarker = ({ lat, lng }) => {
        const markerData = {lat, lng, key: Date.now()}
        this.setState({
            markers: this.state.markers.concat()
        }, ()=>{
            localStorage.setItem('key', JSON.stringify(markerData)) // not working !
        })
    }

    render() {
        return (
            <GoogleMapReact
                apiKey={'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc'}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onClick={this.placeMarker}
            >
                {
                    this.state.markers.map((marker) =>
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

const AddRun = () => (
    <div style={{ width: '50vw', height: '50vh' }}>
        <Map
            center={{ lat: 51.216276, lng: 22.631233 }}
            zoom={15}
        />
    </div>
)

export default AddRun;