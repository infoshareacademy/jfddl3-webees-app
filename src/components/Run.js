import React from 'react';
import Map from "./Map";
import {database} from '../firebase'
import WebeesPaper from "./WebeesPaper";
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'

import {updateRun} from '../state/runs'

import {webeesColors, webeesFont} from '../styles'

class Run extends React.Component {
    state = {
        markers: [],
        signedRunners: []
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
        const currentUserUID = this.props.userData.uid
        const currentUserEmail = this.props.userData.email
        const handleAddRunner = () => this.setState({
            signedRunners: this.state.signedRunners.concat([{uid: currentUserUID, email: currentUserEmail}])
        }, () => {
            this.props.updateRun(this.props.match.params.id, this.state)
        })

        const isUserSignedUp = this.state.signedRunners.filter(user => user.uid === currentUserUID).length === 0 ? false : true

        const numberOfSignedRunners = this.state.signedRunners ?
            this.state.signedRunners.length
            :
            0

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
                                <h2 style={{fontFamily: webeesFont}}> {'Nazwa biegu: ' + this.state.name}</h2>
                                <h2 style={{fontFamily: webeesFont}}>{'Długość biegu: ' + Math.round(this.state.distance * 1000) / 1000} km </h2>
                                <h2 style={{fontFamily: webeesFont}}>{'Kategoria: ' + this.state.category === 'city' ? 'Miejski' : 'Zamiejski'}</h2>

                                {
                                    numberOfSignedRunners < this.state.runners ?
                                        isUserSignedUp ?
                                            <p style={{fontFamily: webeesFont}}>Użytkowanik już zapisany</p>
                                            :
                                            <RaisedButton
                                                label="Zapisz się na bieg"
                                                onClick={handleAddRunner}
                                                backgroundColor={webeesColors.darkGreen}
                                                labelStyle={{fontFamily: webeesFont}}
                                                labelColor={webeesColors.beige}
                                            />
                                        :
                                        <p style={{fontFamily: webeesFont}}>Nie ma miejsc na bieg</p>
                                }


                                <h2 style={{fontFamily: webeesFont}}>Lista zapisanych biegaczy:</h2>

                                {
                                    this.state.signedRunners.map((runner, i) => (
                                        <div key={runner.uid} style={{fontFamily: webeesFont}}>{i + 1}: {runner.email}</div>
                                    ))
                                }

                            </WebeesPaper>
                        </div>
                        :
                        <WebeesPaper>
                            <h3 style={{fontFamily: webeesFont}}>Ładowanie...</h3>
                        </WebeesPaper>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
    updateRun: (runId, dataToSave) => dispatch(updateRun(runId, dataToSave))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Run)