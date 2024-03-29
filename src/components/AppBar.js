import React from 'react';
import MuiAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import styles, { webeesColors } from '../styles'
import { logOut } from '../state/auth'
import { connect } from 'react-redux'

const AppBar = props => (
    <MuiAppBar
        title="WeBees App"
        onLeftIconButtonClick={props.onMenuClickProps}
        style={styles.appBar}
        titleStyle={styles.appBarTitle}
        iconElementRight={
            <FlatButton
                label="Wyloguj"
                onClick={() => { props.logOut(); alert('Zostałeś wylogowany!') }}
                style={styles.link}
                backgroundColor={webeesColors.darkGreen}
                hoverColor={webeesColors.red}
            />}
    />
)

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
})

export default connect(
    null,
    mapDispatchToProps
)(AppBar)