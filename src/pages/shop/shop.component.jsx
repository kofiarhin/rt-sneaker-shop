import React from "react"
import { connect } from "react-redux"
import "./shop.styles.sass"
import { Link } from "react-router-dom"

class Shop extends React.Component {

    constructor() {
        super()
        this.state = {
            items: [],
            search: ""
        }
    }

    componentDidMount() {

        const { shopData } = this.props;


        // get search

        const { search = "jordan" } = this.props.match.params;




        // get items from data
        const { items } = shopData.find(item => item.title === search)


        this.setState({
            items,
            search
        })


    }

    componentWillReceiveProps(nextProps) {

        const { search = "jordan" } = nextProps.match.params;

        const { shopData } = this.props;

        const { items } = shopData.find(item => item.title === search)


        this.setState({
            search,
            items
        })
    }

    render() {

        const { items, search } = this.state;

        return <div className="shop">

            <h1 className="title">  {search} </h1>
            <div className="container">
                {
                    items ? items.map(item => {

                        return <Link to={`/shop/${search}/${item.id}`} key={item.id} className="unit">

                            <img src={`/img/${search}/${item.name}/img-1.jpeg`} alt="" />

                            <div className="content">
                                <h1> {item.name}  </h1>
                                <p className="price">$ {item.price} </p>

                            </div>

                        </Link>
                    }) : null
                }
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    shopData: state.shop.shopData
})

export default connect(mapStateToProps)(Shop)