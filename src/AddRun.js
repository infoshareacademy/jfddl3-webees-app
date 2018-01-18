import React, { Component } from 'react'
import { render } from 'react-dom'
import GoogleMapReact from 'google-map-react'
import AddButton from './AddButton'
import SelectField from './SelectField'
import TextField from './TextField'
import { database } from './firebase'

const Pin = props => (<div><i className="material-icons" style={{ color: 'red' }}>room</i>{props.index + 1}</div>)

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
        distance: 0,
        name: '',
        category: 'city'
    }

    selectChange = (event, index, value) => { this.setState({ category: value }); console.log(value) };
    textFieldChange = (event, value) => { this.setState({ name: value }); console.log(value) };

    getData = () => {
        database.ref('/runs/').once('value')
            .then(snapshot => {
                const dataFromDb = snapshot.val()
                this.setState({
                    // state: dataFromDb
                })
            })
    }

    placeMarker = ({ lat, lng }) => {
        const markerData = { lat, lng, key: Date.now() }
        this.setState({
            markers: this.state.markers.concat(markerData),
            distance: this.getDistanceFromLatLonInKm( this.state.markers.concat(markerData))
        }, () => {
        console.dir(this.state.markers);
        console.dir(this.state.distance);
        })
    }

    getDistanceFromLatLonInKm = markers => {
        let runDistance = 0
        if (markers.length > 1) {
            markers.reduce((pv, cv, i, arr) => {
                let dLat = (cv.lat - pv.lat) * Math.PI / 180
                let dLon = (cv.lng - pv.lng) * Math.PI / 180
                let a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(pv.lat * Math.PI / 180) * Math.cos(cv.lat * Math.PI / 180) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2)

                let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
                let segmentDistance = 6371 * c
                runDistance = runDistance + segmentDistance
                return cv
            })
        }
        return runDistance
    }


    saveRun = () => {
        const listDbRef = database.ref('/runs/')
        listDbRef.push(this.state)
            .then(() => console.log('saved'))
            .catch(() => console.log('error!'));
        this.setState({
            markers: [],
            name: '',
            category: 'city'
        })
    }

    render() {

        return (
            <div style={{ width: '50vw', height: '50vh' }}>
                <Map
                    center={{ lat: 51.216276, lng: 22.631233 }}
                    zoom={15}
                    markers={this.state.markers}
                    placeMarker={this.placeMarker}
                />
                <TextField
                    name={this.state.name}
                    onTextFieldChange={this.textFieldChange}
                />
                <SelectField
                    category={this.state.category}
                    onSelectChange={this.selectChange}
                />
                <AddButton
                    onBtnClick={this.saveRun}
                />
            </div>
        )
    }
}

export default AddRun;