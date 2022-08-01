import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/CartScreen";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import ApplicationList from "./pages/ApplicationList";
import './App.css';
import Single from "./pages/SinglePost/SinglePost";
//import Wishlist  from './components/wishlist/Wishlist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog/Blog";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  //const userLogin = useSelector((state) => state.userLogin)
  //const { user  } = userLogin

  return (
    <Router>
         
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
        <Route path="/success">
          <Success />
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
        <Route path="/post">
          <Blog />
        </Route>
        <Route path="/posts/:postId">
          <Single />
        </Route>
        <Route path="/order/:id" component={Cart}/>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
