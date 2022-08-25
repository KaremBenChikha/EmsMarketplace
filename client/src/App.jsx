import Product from "./pages/Products/Product";
import Home from "./pages/Home";
import ProductList from "./pages/Products/ProductList";
import Register from "./pages/Login_Rege/Register";
import Login from "./pages/Login_Rege/Login";
import Cart from "./pages/Orders/Cart";
import Products from "./pages/Products/Products";
import Applications from "./pages/Applications/Applications";
import ApplicationList from "./pages/Applications/ApplicationList";
import TrackOrders from "./pages/Orders/TrackOrders";
import './App.css';
import Single from "./pages/SinglePost/SinglePost";
//import Wishlist  from './components/wishlist/Wishlist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import ShippingScreen from "./pages/Orders/ShippingScreen";
import PaymentScreen from "./pages/Orders/PaymentScreen";
import PlaceOrder from "./pages/Orders/PlaceOrder";
import OrderScreen from "./pages/Orders/OrderScreen";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/Navbar2";
import ApplicationType from "./pages/Applications/ApplicationType";
import Faq from "./pages/FAQ/Faq";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  //const userLogin = useSelector((state) => state.userLogin)
  //const { user  } = userLogin

  return (
    <Router>
      <Navbar2/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/applications">
          <Applications />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
        <Route path="/applicationList/:application">
          <ApplicationList />
        </Route>
        <Route path="/applicationType/:type">
          <ApplicationType />
        </Route>
        <Route path="/post">
          <Blog />
        </Route>
        <Route path="/posts/:postId">
          <Single />
        </Route>
        <Route path="/trackOrders">
          <TrackOrders />
        </Route>
        <Route path="/FAQ" component={Faq}/>
        <Route path="/shipping" component={ShippingScreen}/>
        <Route path="/payment" component={PaymentScreen}/>
        <Route path="/placeorder" component={PlaceOrder}/>
        <Route path="/order/:id" component={OrderScreen}/>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
