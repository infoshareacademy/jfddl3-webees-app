import React, { Component } from 'react'
import AddButton from './AddButton'
import { RunCategorySelect, RunnersCountSelect } from './SelectField'
import TextField from 'material-ui/TextField'
import Map from './Map'
import { database } from '../firebase'

import styles from '../styles'

class AddRun extends React.Component {
    state = {
        markers: [],
        distance: 0,
        name: '',
        category: 'city',
        runners: 20
    }

    runCategoryChange = (event, index, value) => this.setState({ category: value })

    runNameChange = (event, value) => this.setState({ name: value })

    runnersCountChange = (event, index, value) => this.setState({ runners: value })

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
            distance: this.getDistanceFromLatLonInKm(this.state.markers.concat(markerData))
        })
    }

    markerDescriptionChange = (index, value) => {
        let newMarkers = this.state.markers.map((marker, i) => i === index ? { ...marker, desc: value } : marker)
        this.setState({
            markers: newMarkers
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
            <div>
                <div style={styles.addRunContainer}>
                    <div style={styles.mapContainer}>
                        <div style={{ margin: '10px 0' }}>Dodaj nowy bieg!</div>
                        <div
                            style={{ border: '1px solid black', width: '50vw', height: '50vh' }}
                        >
                            <Map
                                center={{ lat: 51.216276, lng: 22.631233 }}
                                zoom={15}
                                markers={this.state.markers}
                                placeMarker={this.placeMarker}
                            />

                        </div>
                    </div>
                    <div>
                        <TextField
                            floatingLabelText={'Nazwa biegu'}
                            value={this.state.name}
                            onChange={this.runNameChange}
                        />
                        <RunCategorySelect
                            category={this.state.category}
                            onSelectChange={this.runCategoryChange}
                        />
                        <RunnersCountSelect
                            runners={this.state.runners}
                            onSelectChange={this.runnersCountChange}
                        />
                        <br />
                        <AddButton
                            onBtnClick={this.saveRun}
                        />
                    </div>
                </div>
                <div style={styles.markerDescriptionContainer}>
                    {this.state.markers.map((marker, index) => (
                        <TextField
                            floatingLabelText={`Opis punktu nr ${index + 1}`}
                            onChange={(e, value) => this.markerDescriptionChange(index, value)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default AddRun