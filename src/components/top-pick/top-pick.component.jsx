import React from "react"
import "./top-pick.styles.sass"
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomSelect from "../../components/customSelect/custom-select.component"
import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cart.action"

class TopPick extends React.Component {

    constructor() {

        super()
        this.state = {
            quantity: 1,
            size: "",
            item: {},
            imgUrl: "img/jordan/AIR JORDAN 1 RETRO HIGH OG 'BLACK METALLIC GOLD'/img-1.jpeg",

        }
    }

    componentDidMount() {

        const { shopData } = this.props
        const title = "jordan"

        const { items } = shopData.find(item => (item.title === title));

        const item = items[0]

        this.setState({
            item: { ...item, title },
            imgUrl: `img/${title}/${item.name}/img-1.jpeg`
        })
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { quantity, size, item } = this.state;

        this.props.dispatch(addItem({
            ...item,
            quantity: parseInt(quantity),
            size
        }))

        this.setState({
            quantity: "",
            size: ""
        })


    }

    handleImgUrl = e => {

        this.setState({
            imgUrl: e.target.src
        })
    }

    render() {


        const { item: { name, title } } = this.state;

        return <div className="top-pick">

            <div className="container">

                <h1 className="title">Top Pick</h1>

                <div className="wrapper">
                    <div className="image-wrapper">
                        <img src={this.state.imgUrl} alt="" />

                        <div className="thumb-wrapper">

                            <img src={`img/jordan/${name}/img-1.jpeg`} alt="" onClick={this.handleImgUrl} />

                            <img src={`img/${title}/${name}/img-2.jpeg`} alt="" onClick={this.handleImgUrl} />

                            <img src={`img/${title}/${name}/img-3.jpeg`} alt="" onClick={this.handleImgUrl} />
                            <img src={`img/${title}/${name}/img-4.jpeg`} alt="" onClick={this.handleImgUrl} />
                            <img src={`img/${title}/${name}/img-5.jpeg`} alt="" onClick={this.handleImgUrl} />

                        </div>
                    </div>

                    <div className="content">

                        <h2> {name}</h2>

                        <form action="" onSubmit={this.handleSubmit}>

                            <FormInput type="text" name="quantity" label="Quantity" placeholder="1" handleChange={this.handleChange} value={this.state.quantity} required />


                            <CustomSelect required handleChange={this.handleChange} name="size" sizes={[38, 40, 45]} value={this.state.size} />

                            <CustomButton type="submit"> Add To Cart</CustomButton>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    }
}
const mapStateToProps = state => ({
    shopData: state.shop.shopData
})
export default connect(mapStateToProps)(TopPick)