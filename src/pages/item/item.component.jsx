import React from "react"
import { connect } from "react-redux"
import "./item.styles.sass"
import { addItem } from "../../redux/cart/cart.action"

class Item extends React.Component {

    constructor() {

        super();
        this.state = {
            search: "",
            item: null,
            imgNum: 1,
            size: "",
            quantity: 1
        }
    }

    componentDidMount() {

        const { shopData } = this.props;


        const { id, search } = this.props.match.params;


        // get item
        const { items } = shopData.find(item => item.title === search);

        const item = items.find(item => item.id === parseInt(id))
        console.log("item", { item })
        this.setState({
            search,
            item
        })


    }

    componentWillReceiveProps(nextProps) {

        const { search, id } = nextProps.match.params;
        const { shopData } = nextProps;

        const { items } = shopData.find(item => item.title === search)

        const item = items.find(item => item.id == id)


        this.setState({
            search,
            item
        })


    }

    handleAdd = () => {


        const { item } = this.state;

        this.props.dispatch(addItem({
            search: this.state.search,
            ...item
        }))

    }

    handleCurrentImg = e => {

        const value = parseInt(e.target.value)

        this.setState({
            imgNum: value
        })
    }

    handleChange = e => {
        e.preventDefault()

        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { item, quantity, size, search } = this.state;


        this.props.dispatch(addItem({
            ...item,
            quantity: parseInt(quantity),
            size,
            search
        }))

        this.setState({
            quantity: 1,
            size: ""
        }, () => console.log(this.state))
    }

    render() {

        const { search, item } = this.state;

        return <div className="main-item">

            <h1 className="title"> {search}</h1>

            {
                item ?

                    <div>

                        <div className="container">

                            <div className="img-wrapper">

                                <img src={`/img/${search}/${item.name}/img-${this.state.imgNum}.jpeg`} alt="" />

                                <div className="thumb-wrapper">

                                    <button onClick={this.handleCurrentImg} value="1">
                                        <img src={`/img/${search}/${item.name}/img-1.jpeg`} alt="" />
                                    </button>


                                    <button onClick={this.handleCurrentImg} value="2">
                                        <img src={`/img/${search}/${item.name}/img-2.jpeg`} alt="" />
                                    </button>


                                    <button onClick={this.handleCurrentImg} value="3">
                                        <img src={`/img/${search}/${item.name}/img-3.jpeg`} alt="" />
                                    </button>


                                    <button onClick={this.handleCurrentImg} value="4">
                                        <img src={`/img/${search}/${item.name}/img-4.jpeg`} alt="" />
                                    </button>


                                </div>
                            </div>

                            <div className="content">
                                <h1> {item.name}</h1>
                                <h2>${item.price} <span>&UP</span></h2>


                                {/* add item form*/}

                                <form onSubmit={this.handleSubmit}>

                                    <label htmlFor="quantity">Quantity</label>

                                    <input type="text" placeholder="Quantity" name="quantity" onChange={this.handleChange} required value={this.state.quantity} />


                                    <label>Select Your Size</label>

                                    <select name="" id="" onChange={this.handleChange} name="size" required value={this.state.size}  >
                                        <option value="">---</option>
                                        {item.sizes ? item.sizes.map((size, index) => <option key={index} value={size}> {size} </option>) : null}
                                    </select>

                                    <button> Add Item</button>
                                    {/* <button onClick={this.handleAdd}>Add To Cart</button> */}
                                </form>


                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam porro minima, asperiores ipsum, error autem obcaecati corporis molestiae impedit soluta, reprehenderit nesciunt ratione accusamus. Iure iusto accusantium quisquam doloribus cum!</p>
                            </div>

                        </div>
                    </div>

                    : null
            }
        </div>
    }
}

const mapStateToProps = state => ({
    shopData: state.shop.shopData
})
export default connect(mapStateToProps)(Item)