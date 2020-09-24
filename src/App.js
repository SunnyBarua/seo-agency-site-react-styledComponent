import React from "react";
import GlobalStyles from "./globalStyles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Producs";
import SignUp from "./pages/SignUp/SignUp";
import Services from "./pages/Services/Services";
import Scroll from "./components/Scroll";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Scroll />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
