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
            imgNum: 1
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

    render() {

        const { search, item } = this.state;

        return <div>

            {
                item ?

                    <div className="main-item">
                        <h1 className="title"> {search}</h1>

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
                                <p>{item.description} </p>
                                <h2> ${item.price}</h2>
                                <button onClick={this.handleAdd}>Add some </button>
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