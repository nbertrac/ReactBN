import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function router() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/projet">projet</Link>
          </li>
          <li>
            <Link to="/cv">cv</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projet">
            <Projet />
          </Route>
          <Route path="/cv">
            <Cv />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Lost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Projet() {
  return (
    <div>
      <h2>Projet</h2>
    </div>
  );
}

function Cv() {
  return (
    <div>
      <h2>CV</h2>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

function Lost() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
