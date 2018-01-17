import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
    padding: 20,
    margin: 20,
    textAlign: 'center',
}

const WebeesPaper = (props) => (
    <div>
        <Paper style={style}>
            {props.children}
        </Paper>
    </div>
)

export default WebeesPaper

