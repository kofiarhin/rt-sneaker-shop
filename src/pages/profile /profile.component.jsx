import React from "react"
import { connect } from "react-redux"

class Profile extends React.Component {

    componentDidMount() {


    }
    render() {

        const { currentUser: { displayName } } = this.props
        return <div className="profile">

            <h1 className="title">Welcome {displayName} </h1>

        </div>
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Profile)