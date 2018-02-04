import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

import styles, { webeesColors, webeesFont } from '../styles'

export default class SnackbarExampleSimple extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        if (!this.props.addCheck) {
            alert('Add name and minimum two markers!')
            return
        }
        this.props.saveRun()
        this.setState({
            open: true
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <RaisedButton
                    onClick={this.handleClick}
                    label="Dodaj bieg"
                    backgroundColor={webeesColors.darkGreen}
                    labelStyle={{ fontFamily: webeesFont }}
                    labelColor={webeesColors.beige}
                    style={{ margin: '20px 0' }}
                />
                <Snackbar
                    open={this.state.open}
                    message="Bieg został zapisany!"
                    autoHideDuration={2000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}