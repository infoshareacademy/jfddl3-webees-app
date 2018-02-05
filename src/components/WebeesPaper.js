import React from 'react'
import Paper from 'material-ui/Paper'
import styles from '../styles'

const WebeesPaper = props => (
    <div>
        <Paper style={styles.webeesPaper}>
            {props.children}
        </Paper>
    </div>
)

export default WebeesPaper

