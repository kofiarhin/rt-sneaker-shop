import React from "react"
import "./landing.styles.sass"
import { Link } from "react-router-dom"

const Landing = () => {

    return <div className="landing">

        <div className="container">

            <Link to="/shop/jordan" className="unit" style={{
                backgroundImage: `url(/img/jordan/thumb.jpeg)`
            }}>
                <h1>Jordans</h1>
            </Link>

            <Link to="/shop/adidas" className="unit" style={{
                backgroundImage: `url(/img/adidas/thumb.jpeg)`
            }}>
                <h1>Adidas</h1>
            </Link>



            <Link to="/shop/nike" className="unit" style={{
                backgroundImage: `url(/img/nike/thumb.jpeg)`
            }}>
                <h1>Nike</h1>
            </Link>


            <Link to="/shop/women" className="unit" style={{
                backgroundImage: `url(/img/women/thumb.jpeg)`
            }}>
                <h1>Women</h1>
            </Link>

        </div>

    </div>
}

export default Landing