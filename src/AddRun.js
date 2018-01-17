import React, {Component} from 'react'
import {render} from 'react-dom'
import GoogleMapReact from 'google-map-react'
import AddButton from './AddButton'
import SelectField from './SelectField'
import TextField from './TextField'

const Pin = () => <div><i className="material-icons" style={{color: 'red'}}>room</i></div>

const databaseUrl = 'https://my-project-15d7d.firebaseio.com/'

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
        type: '',
        runCategory: 'city',
    }

    handleChange = (event, index, value) => {this.setState({runCategory: value}); console.log(value)};

    save = () => {
        // fetch(databaseUrl + 'list/' + '/.json',
        //     {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         name: this.state.name,
        //         type: this.state.type,
        //         markers: this.state.markers
        //     }),
        //     headers: ({'Content-Type': 'application/json'})
        //     })
        //     .then(() => this.getData())
        console.log('save')
    }

    getData = () => {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDb => this.setState({
                list: dataFromDb,
                newTaskName: ""
            }))
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
                <TextField
                />
                <SelectField
                    runCategory={this.state.runCategory}
                    onSelectChange={this.handleChange}
                />
                <AddButton
                    onBtnClick={this.save}
                />
            </div>
        )
    }
}

export default AddRun;