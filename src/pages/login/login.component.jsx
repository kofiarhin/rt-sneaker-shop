import React from "react"
import { Link } from "react-router-dom"

const Login = () => {

    return <div>

        <h1 className="title">  Login  </h1>

        <div className="form-wrapper">
            <form action="">

                <input type="text" name="email" placeholder="Email Address" />
                <input type="password" name="password" placeholder="Password" />
                <button>Login</button>
                <button className="google">Login With Google</button>

                <Link>Login Here</Link>
                <p>Don't have an account? <Link to="/register">signup here</Link> </p>
            </form>
        </div>

    </div>

}

export default Login