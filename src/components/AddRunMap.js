import React from 'react'
import GoogleMapReact from 'google-map-react'

const Pin = props => (
    <div>
        <i className="material-icons" style={{ color: 'red' }}>room</i>
        {props.index + 1}
    </div>
)

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
                    this.props.markers.map((marker, index) =>
                        <Pin
                            key={marker.key}
                            lat={marker.lat}
                            lng={marker.lng}
                            index={index}
                            description={marker.description}
                        />
                    )
                }
            </GoogleMapReact>
        )
    }
}

export default Map