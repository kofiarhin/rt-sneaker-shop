import React from "react"
import  { Switch, Route, Redirect } from "react-router-dom"
import Home from "./pages/home/home.component"
import Shop from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import Cart from "./pages/cart/cart.component"
import "./app.styles.sass"
import { connect } from "react-redux"
import  Item from "./pages/item/item.component"
import Checkout from "./pages/checkout/checkout.component"
import { getShopData} from "./redux/shop/shop.action"
import Login from "./pages/login/login.component"
import Register from "./pages/register/register.component"
import Footer from "./components/footer/footer.component"
import { auth } from "./firebase/firebase.utils"
import { setCurrentUser} from  "./redux/user/user.action"

class App extends React.Component {

  componentDidMount() {

    console.log("???", this.props)

      auth.onAuthStateChanged( user => {

              this.props.dispatch(setCurrentUser(user))

              if(user) {

                this.props.dispatch( setCurrentUser(user))
              } else {

                this.props.dispatch( setCurrentUser(null))
              }
      })
  }
 

  render() {

    return <div>

          <Header /> 
          <Switch>
                <Route exact path="/"  component={Home}  />
                <Route exact path="/shop" component={Shop} /> 
                <Route exact path="/shop/:search" component={Shop} />
                <Route exact path="/shop/:search/:id" component={Item} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact  path="/login"  render={() => this.props.currentUser ?  <Redirect to="/" /> :  <Login />   } />
                <Route exact  path="/register" component={Register} />
            </Switch>

            <Footer /> 

    </div> 
  }
}

const mapStateToProps = state => ({
  shopData: state.shopData,
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(App)