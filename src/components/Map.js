import React from 'react'
import GoogleMapReact from 'google-map-react'

class Pin extends React.Component {
    state = {
        isDescVisible: false
    }

    toggleDescVisibility = () => {
        this.setState({
            isDescVisible: !this.state.isDescVisible
        })
    }

    render() {
        return (
            <div onClick={this.toggleDescVisibility}>
                <i className="material-icons" style={{ color: 'red' }}>room</i>
                {`${this.props.index + 1}: ${this.state.isDescVisible ? this.props.description : ''}`}
            </div>
        )
    }
}

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
                            description={marker.description || ''}
                        />
                    )
                }
            </GoogleMapReact>
        )
    }
}

export default Map