import React from "react"
import "./top-pick.styles.sass"
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

class TopPick extends React.Component {

    constructor() {

        super()

        this.state = {

            size: "",
            quantity: 1
        }
    }


    handleChange = e => {

        const { value, name } = e.target;

        console.log(value, name)
    }

    render() {
        return <div className="top-pick">

            <div className="container">
                <h1 className="title"> Our Top Pick</h1>

                <p className="slug"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laborum mollitia cupiditate itaque modi consequatur vel quo sequi. Esse inventore vero corrupti nostrum iusto cum eligendi tenetur explicabo beatae! Excepturi?</p>

                <div className="wrapper">

                    <div className="image-wrapper">
                        <img src="img/jordan/AIR JORDAN 1 RETRO HIGH OG 'BLACK METALLIC GOLD'/img-1.jpeg" alt="" />
                    </div>

                    <div className="content-wrapper">



                        <div className="form-wrapper">

                            <h2> AIR JORDAN 1 RETRO HIGH OG 'BLACK METALLIC GOLD</h2>
                            <form action="">

                                <select name="size" id="">

                                    <option value=""> --- Select Size --</option>
                                    <option value="">52</option>
                                    <option value="">33</option>
                                    <option value="">40</option>

                                </select>

                                <FormInput type="number" label="Quantity" placeholder="Quantity " name="quantity" handleChange={this.handleChange} value={this.state.quantity} />

                                <CustomButton> Add To Cart  </CustomButton>
                            </form>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    }
}

export default TopPick