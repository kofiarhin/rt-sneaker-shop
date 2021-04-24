import React from "react"
import { Link, withRouter } from "react-router-dom"
import CartIcon from "../cartIcon/cart-icon.component"
import { connect } from "react-redux"
import { auth } from "../../firebase/firebase.utils"
import Search from "../search/search.component"

import "./header.styles.sass"

class Header extends React.Component {



    render() {

        const { currentUser = "" } = this.props;



        return <div className="header">
            <div className="container">

                <Link to="/">
                    <h1>Kicks</h1>
                </Link>


                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop" >Shop</Link>
                    <CartIcon />
                    {
                        currentUser ? <div className="opritons">

                            <Link to="/profile">{currentUser.displayName} </Link>
                            <span onClick={() => auth.signOut()} >Sign Out</span>
                        </div> : <Link to="/login">Login</Link>
                    }

                </nav>
            </div>

            <div className="container">
                <div className="links">
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)