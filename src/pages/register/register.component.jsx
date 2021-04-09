import React from "react"
import { Link } from "react-router-dom"

class Register extends React.Component {

    render() {

        return <div>

            <h1 className="title">Register</h1>

            <div className="form-wrapper">

                <input type="text" placeholder="Name" nam="name" />
                <input type="text" placeholder="Email Address" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Register</button>

                <p>Already have an account ? <Link to="/login"> Login Here</Link> </p>
            </div>

        </div>
    }
}

export default Register;