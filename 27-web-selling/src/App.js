import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar';
import Products from "./pages/Products";

import { CartProvider } from './contexts/Cart'
import Carts from "./pages/Carts";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/carts">
            <Carts />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </CartProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}
