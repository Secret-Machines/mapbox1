import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Map from "./components/Map";
import Map2 from "./components/Map2";
import SearchMap from "./components/SearchMap";
import Home from "./components/Home";
import Resources from "./components/Resources";
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import About from "./components/About";
import history from "./utils/history";

export default () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
      <Router history={history}>
        
          <Navbar />
        
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path="/map" component={Map} />
          <PrivateRoute exact path="/map2" component={Map2} />
          <PrivateRoute exact path="/searchmap" component={SearchMap} />
          <PrivateRoute exact path="/resources" component={Resources} />
        </Switch>
      </Router>
    
  );
};
