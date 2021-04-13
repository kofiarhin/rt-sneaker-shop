import React from "react"
import { Link } from "react-router-dom"

class Register extends React.Component {

    constructor() {
        super()
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = e => {

        e.preventDefault()
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })


    }

    render() {

        return <div>

            <h1 className="title">Register</h1>

            <div className="form-wrapper">

                <input type="text" placeholder="Display Name" name="displayName" onChange={this.handleChange} />
                <input type="text" placeholder="Email Address" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <input type="password" placeholder="Confirm Password" name="confirmPassword" />

                <button>Submit</button>

                <p>Already have an account ? <Link to="/login"> Login Here</Link> </p>
            </div>

        </div>
    }
}

export default Register;