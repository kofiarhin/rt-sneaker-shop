import React from "react"
import "./footer.styles.sass"

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
                    <li> Facebook </li>
                    <li> Instagram </li>
                    <li> Twitter </li>
                </ul>
            </div>

            <div className="col">

                <ul>
                    <li>  Top Collection </li>
                    <li> Facebook </li>
                    <li> Instagram </li>
                    <li> Twitter </li>
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