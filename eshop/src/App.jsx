import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./cart/Cart";
import Error from "./error/Error";
import NavBar from "./nav-bar/NavBar";
import ProductPage from "./product-page/ProductPage";
import Products from "./products/Produts";
import Vision from "./vision/Vision";
import CartProvider from "./common/providers/CartProvider";

function App() {
  return (
    <Router>
      <CartProvider>
        <header>
          <NavBar />
        </header>
        <main className="p-10 pt-5" style={{ height: "calc(100vh - 44px)" }}>
          <Switch>
            <Route exact path={["/", "/products"]} component={Products} />
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/products/:id" component={ProductPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/error" component={Error} />
          </Switch>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
