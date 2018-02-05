import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles, { webeesColors, webeesFont } from '../../styles'

const LogIn = props => (
    <div style={styles.flexCenter}>
        <Paper style={styles.loginBox}>
            <h1>
                Zaloguj się!
                </h1>
            <h5 style={styles.centerItalic}>
                Przykładowe dane logowania:<br />mail: example@example.com<br />hasło: qwerasdf1234
                </h5>
            <TextField
                name="email"
                placeholder={'E-mail'}
                type="email"
                style={styles.input}
                underlineFocusStyle={{ borderColor: webeesColors.green }}
                onChange={props.onEmailChange}
            />
            <TextField
                name="password"
                placeholder={'Password'}
                type="password"
                style={styles.input}
                underlineFocusStyle={{ borderColor: webeesColors.green }}
                onChange={props.onPasswordChange}
            />
            <div>
                <RaisedButton
                    onClick={props.onLogInClick}
                    label="Zaloguj"
                    backgroundColor={webeesColors.green}
                    labelStyle={{ fontFamily: webeesFont }}
                    labelColor={webeesColors.darkGreen}
                    style={{ margin: '20px' }}
                />
                <RaisedButton
                    onClick={props.onLogInByGoogleClick}
                    label="Zaloguj przez Google"
                    backgroundColor={webeesColors.darkGreen}
                    labelStyle={{ fontFamily: webeesFont }}
                    labelColor={webeesColors.beige}
                    style={{ margin: '20px' }}
                />
            </div>
        </Paper>
    </div>
)

export default LogIn