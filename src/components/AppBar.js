import React from 'react';
import MuiAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import styles from '../styles'
import { logOut } from '../state/auth'
import { connect } from 'react-redux'

const AppBar = (props) => (
    <MuiAppBar
        title="WeBees App"
        onLeftIconButtonClick={props.onMenuClickProps}
        style={styles.appBar}
        titleStyle={styles.appBarTitle}
        iconStyleLeft={styles.appBarIcon}
        iconElementRight={
            <FlatButton
                label="Wyloguj"
                onClick={props.logOut}
            />}
    />

    // TODO rigth icon adn onclick on it with alert()
);

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
})



export default connect(
    null,
    mapDispatchToProps
)(AppBar)