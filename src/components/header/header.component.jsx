import React from "react"
import { Link, withRouter } from "react-router-dom"
import CartIcon from "../cartIcon/cart-icon.component"

import "./header.styles.sass"

class Header extends React.Component {



    render() {

        return <div className="header">
            <div className="container">

                <Link to="/">
                    <h1>Kicks</h1>
                </Link>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop" >Shop</Link>
                    <CartIcon />
                    <Link to="/login">Login</Link>

                </nav>
            </div>

            <div className="container">
                <div className="options">
                    <Link to="/shop/jordan">Jordans</Link>
                    <Link to="/shop/adidas">Adidas</Link>
                    <Link to="/shop/nike">Nike</Link>
                    <Link to="/shop/women">Women</Link>
                    <Link to="/shop/kids">kids</Link>
                </div>
            </div>
        </div>

    }




}

export default withRouter(Header)