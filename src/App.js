import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <footer>
        {" "}
        <div className="footer-copyright text-center py-3">
          <span style={{ color: "lightblue" }}>
            {" "}
            <i className="fas fa-code" />
          </span>{" "}
          with <span style={{ color: "red" }}>❤</span> By:
          <a href="https://web.facebook.com/cr7.westlife"> Phonekham</a>
        </div>
      </footer>
    </>
  );
}

export default App;
