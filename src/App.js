import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Characters from "./components/pages/Characters";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Search from "./components/pages/Search";
import License from "./components/pages/Licence";
import { FooterContainer } from "./containers/footer";
import ScrollToTop from "./components/content/ScrollToTop";
import Edit from "./components/characters/EditCharacter";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/license" exact component={License} />
          <Route path="/search" exact component={Search} />
          <Route path="/edit" component={Edit} />
        </Switch>
      </ScrollToTop>
      <FooterContainer />
    </Router>
  );
}

export default App;
