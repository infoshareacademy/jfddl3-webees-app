import React from 'react';
import MuiAppBar from 'material-ui/AppBar';
import styles from '../styles'

const AppBar = (props) => (
    <MuiAppBar
        title="WeBees App"
        onLeftIconButtonClick={props.onMenuClickProps}
        style={styles.appBar}
        titleStyle={styles.appBarTitle}
        iconStyleLeft={styles.appBarIcon}
        
    />
);

export default AppBar;