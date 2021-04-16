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
import Login from "./pages/login/login.component"
import Register from "./pages/register/register.component"
import Footer from "./components/footer/footer.component"
import { auth, createUserProfile } from "./firebase/firebase.utils"
import {getShopData} from "./redux/shop/shop.action"
import Profile from "./pages/profile /profile.component"
import { setCurrentUser} from "./redux/user/user.action"

class App extends React.Component {

  unsubscribe = null;

  componentDidMount() {


    //  get shop data

    this.props.dispatch( getShopData())


    // set authentication
      this.unsubscribe = auth.onAuthStateChanged( async  user => {

             const userRef  = await createUserProfile(user)

             if(userRef) {

              userRef.onSnapshot ( snapshot => {

                  const userData = snapshot.data()

                  this.props.dispatch(setCurrentUser(userData))

             })

             } else {
               this.props.dispatch( setCurrentUser(null))
             }
             
      })
  }

  componentWillUnmount() {
    this.unsubscribe = null
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
                <Route exact  path="/login"  render={() => this.props.currentUser ?  <Profile />  :  <Login />   } />
                <Route exact  path="/register" render={() => this.props.currentUser ? <Profile/> : <Register />  } />
                <Route  path="/profile"  render={() => this.props.currentUser ?  <Profile />  : <Login />} />
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