import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"

class Register extends React.Component {

    constructor() {
        super()
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            error: ""
        }
    }
    handleSubmit = async e => {

        e.preventDefault()

        const { email, password } = this.state;


        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            if (user) {

                this.props.history.push("/login")
            }
        } catch (error) {

            this.setState({
                error: error.message
            })
        }


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

                <form onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Display Name" name="displayName" onChange={this.handleChange} />
                    <input type="text" placeholder="Email Address" name="email" onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={this.handleChange} />

                    <p className="error">{this.state.error} </p>

                    <button>Submit</button>

                    <p>Already have an account ? <Link to="/login"> Login Here</Link> </p>
                </form>
            </div>

        </div>
    }
}

export default Register;