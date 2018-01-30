import React from 'react'

import Forms from './Forms'

import {connect} from 'react-redux'

const Auth = (props) => (
        props.userData ?
            props.children
            :
            <Forms/>
    )

const mapStateToProps = state => ({
    userData: state.auth.user
})


export default connect(
    mapStateToProps,
)(Auth)