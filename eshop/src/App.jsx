import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import ProductPage from "./products/components/ProductPage";
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
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/vision">
            <Vision />
          </Route>
          <Route path="/products/:productId">
            <ProductPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
