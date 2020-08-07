import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar';
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
