import React from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"

const CartIcon = ({ cartCount }) => {


    return <Link to="/cart">
        Cart <span> {cartCount ? cartCount : null} </span>
    </Link>
}


const mapStateToProps = state => {

    const cartCount = state.cart.cartData.reduce((acc, curr) => {
        return acc += curr.quantity
    }, 0)


    return {
        cartCount
    }
}

export default connect(mapStateToProps)(CartIcon)