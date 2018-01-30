import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    container: {
        width: '100%',
        height: '100%',
    },
    item: {
        margin: '5%',
        padding: '5%',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        marginBottom: '10px'
    },
    button: {
        margin: '10px'
    }
}

const LogIn = (props) => (
    <div style={styles.container}>
        <Paper style={styles.item}>
            <h1>
                Zaloguj się!
            </h1>
            <TextField
                name="email"
                placeholder={'E-mail'}
                type="email"
                style={styles.input}
                onChange={props.onEmailChange}
            />
            <TextField
                name="password"
                placeholder={'Password'}
                type="password"
                style={styles.input}
                onChange={props.onPasswordChange}
            />
            <RaisedButton
                primary={true}
                style={styles.button}
                onClick={props.onLogInClick}
                label="Zaloguj"
            />
            <RaisedButton
                secondary={true}
                style={styles.button}
                onClick={props.onLogInByGoogleClick}
                label="Zaloguj przez Google"
            />
        </Paper>
    </div>
)

export default LogIn