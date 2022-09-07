import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import OrderList from "./pages/orders/OrderList";
import OrderD from "./pages/orders/OrderD";
import ProductAnalytics from "./pages/analytics/ProductAnalytics";
import Write from "./pages/writeArticle/Write";
function App() {
  const admin = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
              <Route path="/login">
                <Login />
              </Route>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/orders">
                <OrderList />
              </Route>
              <Route path="/order/:orderId">
                <OrderD />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/analytics">
                <ProductAnalytics />
              </Route>
              <Route path="/articles">
                <Write />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
