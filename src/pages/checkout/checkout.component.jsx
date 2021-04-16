import React from "react"
import "./checkout.styles.sass"
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

class Checkout extends React.Component {

    constructor() {

        super()
        this.state = {
            fullName: "",
            email: "",
            address: ""
        }
    }

    handleChange = e => {

        const { name, value } = e.target;


        this.setState({
            [name]: value
        })
    }

    render() {

        return <div className="checkout">

            <h1 className="title">Shipping Information</h1>

            <div className="form-wrapper">
                <form action="">

                    <FormInput label="Full Name" type="text" placeholder="Full Name" name="fullName" value={this.state.fullName} handleChange={this.handleChange} />


                    <FormInput label="Email" type="text" placeholder="Email Address" name="email" value={this.state.email} handleChange={this.handleChange} />


                    <FormInput label="Address" type="text" placeholder="Address" name="address" value={this.state.email} handleChange={this.handleChange} />


                    <CustomButton>
                        Continue Shopping
                    </CustomButton>



                </form>
            </div>



        </div>
    }
}

export default Checkout