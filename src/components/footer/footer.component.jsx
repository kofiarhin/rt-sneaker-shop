import React from "react"
import "./footer.styles.sass"
import { Link } from "react-router-dom"

const footer = () => {

    return <div className="footer"  >

        <div className="footer-wrapper">

            <div className="col">
                <ul>
                    <li>  Social </li>
                    <li> Facebook </li>
                    <li> Instagram </li>
                    <li> Twitter </li>
                </ul>
            </div>


            <div className="col">
                <ul>
                    <li>  Information </li>
                    <li> My Account</li>
                    <li> Reviews </li>
                    <li> Blog </li>
                </ul>
            </div>

            <div className="col">

                <ul>
                    <li>  Top Collection </li>
                    <li> <Link to="/shop/jordan">Jordans</Link></li>
                    <li> <Link to="/shop/adidas">Adidas</Link></li>
                    <li> <Link to="/shop/nike">Nike</Link></li>
                    <li> <Link to="/shop/women">Women</Link></li>
                    <li> <Link to="/shop/kids">Kids</Link></li>
                </ul>
            </div>

            <div className="col">
                <ul>
                    <li>
                        <h2>Subscription</h2>

                    </li>

                    <li>

                        <p>Signup for our newsletter for exclusive discounts and savings</p>


                    </li>

                    <li>
                        <input type="text" placeholder="Email Address" />
                    </li>

                    <li>
                        <button>Signup</button>
                    </li>

                </ul>

            </div>

            <div className="text-wrapper">
                <p> Creatd by<a href="">Kofi Arhin</a></p>
                <p>copyright 2021. All rights reserved</p>
            </div>

        </div>
    </div>
}

export default footer