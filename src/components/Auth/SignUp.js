import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles, { webeesColors, webeesFont } from '../../styles'

const SignUp = (props) => (
    <div style={styles.flexCenter}>
        <Paper style={styles.loginBox}>
            <h1>
                Zarejestruj się!
            </h1>
            <TextField
                name="email"
                placeholder={'E-mail'}
                type="email"
                style={styles.input}
                underlineFocusStyle={{ borderColor: webeesColors.darkGreen }}
                onChange={props.onEmailChange}
            />
            <TextField
                name="password"
                placeholder={'Password'}
                type="password"
                style={styles.input}
                underlineFocusStyle={{ borderColor: webeesColors.darkGreen }}
                onChange={props.onPasswordChange}
            />
            <TextField
                name="retypePassword"
                placeholder={'Retype password'}
                type="password"
                style={styles.input}
                underlineFocusStyle={{ borderColor: webeesColors.darkGreen }}
                onChange={props.onRetypePasswordChange}
            />
            <RaisedButton
                onClick={props.onSignUpClick}
                label="Zarejestruj"
                backgroundColor={webeesColors.green}
                labelStyle={{ fontFamily: webeesFont }}
                labelColor={webeesColors.darkGreen}
                style={{ margin: '20px' }}
            />
        </Paper>
    </div>
)

export default SignUp