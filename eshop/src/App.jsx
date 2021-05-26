import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import ProductPage from "./product-page/ProductPage";
import Products from "./products/Produts";
import Vision from "./vision/Vision";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className="p-10 pt-5">
        <Switch>
          <Route exact path={["/", "/products"]} component={Products} />
          <Route exact path="/vision" component={Vision} />
          <Route path="/products/:productId" component={ProductPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
