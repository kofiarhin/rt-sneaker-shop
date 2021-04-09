import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./cart.styles.sass"
import { clearCart } from "../../redux/cart/cart.action"
import "./cart.styles.sass"

class Cart extends React.Component {



    componentDidMount() {

        // this.props.dispatch(clearCart())
    }

    // research adding local state even though you have data from redux
    // add redux persist

    render() {

        const { cartData } = this.props

        console.log(cartData)

        return <div className="cart-wrapper">

            {
                cartData.length > 0 ?

                    <div>

                        <h1 className="title"> Your Cart </h1>


                        <div className="container">
                            {

                                cartData.map(item => {

                                    return <div className="cart-unit">

                                        <div className="image-wrapper">
                                            <img src={`/img/${item.search}/${item.name}/img-1.jpeg`} alt="" />
                                        </div>

                                        <div className="content">
                                            <h1> {item.name} </h1>
                                            <p className="price"> ${item.price} </p>
                                            <p>Quantity:   <span>{item.quantity}</span> </p>

                                            <button onClick={() => console.log("remove item from cart")}>Remove</button>
                                        </div>

                                    </div>
                                })
                            }

                            <div className="button-wrapper">
                                <Link to="/checkout" >Go To CheckOut</Link>
                            </div>
                        </div>

                    </div>
                    : <div>  <h1 className="cart-message"> Your cart is empty  </h1> </div>
            }

        </div>
    }

}

const mapStateToProps = state => ({
    cartData: state.cart.cartData
})
export default connect(mapStateToProps)(Cart)