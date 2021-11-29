import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from "./Components/MainComponent/Header";
import OrderTracking from "./Components/MainComponent/OrderTracking";
import Contact from "./Components/MainComponent/Contact";
import BulkEnquiry from "./Components/MainComponent/BulkEnquiry";
import StoreLocator from "./Components/MainComponent/StoreLocator";
import Cookies from "./Components/MainComponent/Cookies";
import Home from "./Components/MainComponent/Home";
import Footer from "./Components/MainComponent/Footer";
import AllCookies from "./Components/SubComponent/AllCookies";
import ChocolateCookies from "./Components/SubComponent/ChocolateCookies";
import ComboProducts from "./Components/SubComponent/ComboProducts";
import GiftTins from "./Components/SubComponent/GiftTins";
import GrownetCookies from "./Components/SubComponent/GrownetCookies";
import MoufinBrownies from "./Components/SubComponent/MoufinBrownies";
import HealthWellness from "./Components/SubComponent/HealthWellness";
import SpecialityCookies from "./Components/SubComponent/SpecialityCookies";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/storelocator" component={StoreLocator} />
          <Route path="/bulkenquiry" component={BulkEnquiry} />
          <Route path="/contact" component={Contact} />
          <Route path="/ordertracking" component={OrderTracking} />

          {/* Sub Links */}
          <Route path="/allcookies" component={AllCookies} />
          <Route path="/chocolatecookies" component={ChocolateCookies} />
          <Route path="/comboproducts" component={ComboProducts} />
          <Route path="/gifttins" component={GiftTins} />
          <Route path="/grownetcookies" component={GrownetCookies}/>
          <Route path="/healthwellness" component={HealthWellness} />
          <Route path="/moufinbrownies" component={MoufinBrownies} />
          <Route path="/specialitycookies" component={SpecialityCookies} />

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
