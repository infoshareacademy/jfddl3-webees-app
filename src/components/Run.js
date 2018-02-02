import React from 'react';
import Map from "./Map";
import {database} from '../firebase'
import WebeesPaper from "./WebeesPaper";
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'

import {updateRun} from '../state/runs'


class Run extends React.Component {
    state = {
        markers: [],
        signedRunners: []
    }

    componentWillMount() {
        this.getRun()
    }

    getRun = () => {
        // TODO get this data from redux
        database.ref(`/runs/${this.props.match.params.id}`)
            .once('value', (snapshot) => {
                console.log(snapshot.val())
                this.setState(snapshot.val())
                console.log(this.props.match.params)
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

                                <h2> {'Nazwa biegu: ' + this.state.name}</h2><br/>
                                <h2>{'Długość biegu: ' + Math.round(this.state.distance * 1000) / 1000} km </h2> <br/>
                                <h2>{'Kategoria: ' + this.state.category === 'city' ? 'Miejski' : 'Zamiejski'}</h2>

                                {
                                    numberOfSignedRunners < this.state.runners ?
                                        isUserSignedUp ?
                                            <p>Użytkowanik już zapisany</p>
                                            :
                                            <RaisedButton
                                                label="Zapisz się na bieg"
                                                primary={true}
                                                backgroundColor={'green'}
                                                onClick={handleAddRunner}
                                            />
                                        :
                                        <p>Nie ma miejsc na bieg</p>
                                }


                                <h2>Lista zapisanych Biegaczy </h2>

                                {
                                    this.state.signedRunners.map((runner, i) => (
                                        <div key={runner.uid}>{i + 1}: {runner.email}</div>
                                    ))
                                }

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