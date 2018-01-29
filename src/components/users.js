import {userData} from './user/fetch_user'


this.props.userData && this.props.userData
    .filter()


const mapStateToProps = state => ({
    userData: state.users.userData,
})

export default connect(
    mapStateToProps,
)(users)