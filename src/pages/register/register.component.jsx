import React from "react"
import { Link } from "react-router-dom"
import { auth, createUserProfile } from "../../firebase/firebase.utils"
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

class Register extends React.Component {

    constructor() {
        super()
        this.state = {
            displayName: "thomas",
            email: "thomas@gmail.com",
            password: "password",
            confirmPassword: "password",
            error: ""
        }
    }
    handleSubmit = async e => {

        e.preventDefault()

        const { email, password, displayName } = this.state;


        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfile({
                ...user,
                displayName,
                createdAt: new Date()
            })


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

                    <FormInput label="Display Name" type="text" placeholder="Display Name" name="displayName" onChange={this.handleChange} required />
                    <FormInput label="Email Address" type="text" placeholder="Email Address" name="email" onChange={this.handleChange} required />
                    <FormInput label="Password" type="password" placeholder="Password" name="password" onChange={this.handleChange} required />
                    <FormInput label="Confirm Password" type="password" placeholder="Confirm Password" name="confirmPassword" onChange={this.handleChange} required />

                    <p className="error">{this.state.error} </p>

                    <CustomButton>
                        Register
                    </CustomButton>

                    <p>Already have an account ? <Link to="/login"> Login Here</Link> </p>
                </form>
            </div>

        </div>
    }
}

export default Register;