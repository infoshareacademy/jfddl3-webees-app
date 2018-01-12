import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = () => <div>X</div> // that means that marker can be anything you want ;)

class Map extends Component {
    state = {
        markers: []
    }

    placeMarker = ({ lat, lng }) => this.setState({ markers: this.state.markers.concat({ lat, lng, key: Date.now() }) })

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onClick={this.placeMarker}
            >
                {
                    this.state.markers.map((marker) =>
                        <AnyReactComponent
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
    <div style={{ width: '100vw', height: '100vh' }}>
        <Map
            center={{ lat: 51.23473, lng: 22.7863599 }}
            zoom={14} // higher is closer
        />
    </div>
)

export default AddRun;