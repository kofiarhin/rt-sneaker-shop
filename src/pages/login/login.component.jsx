import React from "react"
import { Link, Redirect } from "react-router-dom"
import { signInWithGoogle, auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import { createUserProfile } from "../../firebase/firebase.utils"
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"


class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {

        const { currentUser = null } = this.props

        if (currentUser) this.props.history.push("/")

    }


    handleSubmit = async e => {

        e.preventDefault();

        const { email, password } = this.state;

        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password)


        } catch (error) {

            console.log(error.message)
        }



    }

    handleChange = e => {

        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div>

            <h1 className="title">  Login  </h1>

            <div className="form-wrapper">
                <form action="" onSubmit={this.handleSubmit}>

                    <FormInput label="Email" type="text" name="email" placeholder="Email Address" onChange={this.handleChange} />


                    <FormInput label="Password" type="password" name="password" placeholder="Password" onChange={this.handleChange} />



                    <CustomButton> Login </CustomButton>
                    <CustomButton className="google" onClick={signInWithGoogle}>Login With Google</CustomButton>

                    {/* <button className="google" onClick={signInWithGoogle}>Login With Google</button> */}

                    <p>Don't have an account? <Link to="/register">signup here</Link> </p>
                </form>
            </div>

        </div>
    }

}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Login)