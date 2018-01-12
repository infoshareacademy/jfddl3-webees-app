import React from 'react';
import MuiAppBar from 'material-ui/AppBar';

const AppBar = (props) => (
    <MuiAppBar
        title="WeBees App"
        onLeftIconButtonClick={props.onMenuClickProps}
    />
);

export default AppBar;