import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


//Import Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Views
import App from "./App";
import Account from "./views/Account";
import Chemicals from "./views/Chemicals";
import Dashboard from "./views/Dashboard";
import Furniture from "./views/Furniture";
import Grills from "./views/Grills";
import HotTubs from "./views/HotTubs";
import Pools from "./views/Pools";
import Register from "./views/Register";
import Rewards from "./views/Rewards";
import Services from "./views/Services";
import SignIn from "./views/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className='wrapper'>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/account/" component={Account} />
        <Route path="/chemicals/" component={Chemicals} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/furniture/" component={Furniture} />
        <Route path="/grills/" component={Grills} />
        <Route path="/hot_tubs/" component={HotTubs} />
        <Route path="/pools/" component={Pools} />
        <Route path="/register/" component={Register} />
        <Route path="/rewards/" component={Rewards} />
        <Route path="/services/" component={Services} />
        <Route path="/sign-in/" component={SignIn} />
      </Switch>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// TEST
reportWebVitals();
