import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Components
import Header from "./components/header/Header";
import App from "./App";
import Footer from "./components/footer/Footer";

// Views
import Account from "./views/Account";
import Chemicals from "./views/Chemicals";
<<<<<<< HEAD
import Dashboard from "./views/Dashboard";
=======
>>>>>>> 439edfc0b71c25e1759f89f2a5948fefbf42bf76
import Furniture from "./views/Furniture";
import Grills from "./views/Grills";
import HotTubs from "./views/HotTubs";
import Pools from "./views/Pools";
import Register from "./views/Register";
<<<<<<< HEAD
import Rewards from "./views/Rewards";
=======
>>>>>>> 439edfc0b71c25e1759f89f2a5948fefbf42bf76
import Services from "./views/Services";
import SignIn from "./views/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/account/" component={Account} />
        <Route path="/chemicals/" component={Chemicals} />
<<<<<<< HEAD
        <Route path="/dashboard/" component={Dashboard} />
=======
>>>>>>> 439edfc0b71c25e1759f89f2a5948fefbf42bf76
        <Route path="/furniture/" component={Furniture} />
        <Route path="/grills/" component={Grills} />
        <Route path="/hot_tubs/" component={HotTubs} />
        <Route path="/register/" component={Register} />
<<<<<<< HEAD
        <Route path="/rewards/" component={Rewards} />
=======
>>>>>>> 439edfc0b71c25e1759f89f2a5948fefbf42bf76
        <Route path="/pools/" component={Pools} />
        <Route path="/services/" component={Services} />
        <Route path="/sign-in/" component={SignIn} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
