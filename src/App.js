import React from "react"
import { connect  } from "react-redux"
import { getUsers} from "./redux/actions/user.action"


class App extends React.Component {

componentDidMount() {

  this.props.dispatch(getUsers())

    const { users} = this.props;

    console.log({users})

}

  render() {

    return <div>
         <h1>Get Users</h1>
    </div>
  }
}

const mapStateToProps =  state => ({
  users: state.user.users
})

// const mapDispatchToProps = dispatch => {

//   return {
//     getUsers: dispatch(getUsers)
//   }
// }

  export default connect(mapStateToProps)(App);