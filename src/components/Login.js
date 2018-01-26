import React from 'react'
import Login from './Login'


class Login extends React.Component {
    state = {
        loginEmail: '',
        loginPassword: '',
    }
    render() {
        return (
            <div>
                <Login
                    onEmailChange={() => {}}
                    onPasswordChange={() => {}}
                />

            </div>
        )
    }

}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)