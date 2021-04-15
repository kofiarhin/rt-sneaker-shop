import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
const CartIcon = ({ cartData = [] }) => {

    let sum = 0

    cartData.forEach(item => {

        sum += item.quantity
    })

    console.log(sum)

    return <Link to="/cart"> Cart <span> {sum > 0 ? sum : null} </span></Link>
}

const mapStateToProps = state => ({
    cartData: state.cart.cartData
})


export default connect(mapStateToProps)(CartIcon)