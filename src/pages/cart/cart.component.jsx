import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./cart.styles.sass"
import { clearCart, removeItem } from "../../redux/cart/cart.action"
import "./cart.styles.sass"

class Cart extends React.Component {



    componentDidMount() {

        // this.props.dispatch(clearCart())
    }


    renderTotal = () => {

        const { cartData } = this.props

        const total = cartData.reduce((acc, curr) => {

            acc = acc + (curr.quantity * curr.price)
            return acc

        }, 0)

        return total
    }

    // research adding local state even though you have data from redux
    // add redux persist

    render() {

        const { cartData } = this.props;

        return <div className="cart-wrapper">

            {
                cartData.length ?

                    <div>

                        <h1 className="title"> Your Cart </h1>


                        <div className="container">
                            {

                                cartData.map((item, index) => {

                                    return <div className="cart-unit" key={index}>

                                        <div className="image-wrapper">
                                            <img src={`/img/${item.title}/${item.name}/img-1.jpeg`} alt="" />
                                        </div>

                                        <div className="content">
                                            <h1> {item.name} </h1>
                                            <p className="price"> ${item.price} </p>
                                            <p className="size">Size: {item.size} </p>
                                            <p className="quantity">QTY:   <span>{item.quantity}</span> </p>

                                            <button onClick={() => this.props.dispatch(removeItem({ ...item, index }))}>Remove</button>
                                        </div>

                                    </div>
                                })
                            }

                            <div className="text-wrapper">
                                <h1>Total</h1>
                                <h2> ${this.renderTotal()} </h2>
                            </div>

                            <div className="button-wrapper">
                                <Link to="/checkout" >Go To CheckOut</Link>
                                <button className="clear" onClick={() => this.props.dispatch(clearCart())}>Clear Cart</button>
                            </div>
                        </div>

                    </div>
                    : <div className="cart-wrapper">
                        <div className="container">
                            <h1 className="cart-message"> Your cart is empty  </h1>
                        </div>
                    </div>
            }

        </div>
    }

}

const mapStateToProps = state => ({
    cartData: state.cart.cartData
})
export default connect(mapStateToProps)(Cart)