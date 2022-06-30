import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css
import "../css/style.css";

//Loader
import ThreeDots from "../components/loader/threedots";

//Layout
import LayoutNav from "../layout/layoutNav";

// 404
import Lost from "./404";

//Pages
const Home = React.lazy(() => import("../pages/home"));
const Projet = React.lazy(() => import("../pages/projet"));
const Contact = React.lazy(() => import("../pages/contact"));
const Cv = React.lazy(() => import("../pages/cv"));

const Routeur = () => (
  <Suspense fallback={<ThreeDots />}>
    <Router>
      <LayoutNav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projet" component={Projet} />
          <Route path="/cv" component={Cv} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Lost} />
        </Switch>
      </LayoutNav>
    </Router>
  </Suspense>
);

export default Routeur;
