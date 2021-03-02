import "./CSS/StyleSheet.css";
import ScriptTag from "react-script-tag";
import { FltrMenu, MblAccMenu, MblMenu } from "./JS/JS.js";
import TopBar from "./components/Topbar";
import ShippingLocation from "./components/ShippingLocation";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";

function App() {
  const [location, setLocation] = useState(false);
  return (
    <Router>
      <>
        <span
          className="MblMenuBtn"
          id="MblMnBtn"
          onClick={() => MblMenu()}
        ></span>
        <span
          className="MblAccounttMnuBtn"
          id="MblAcctMnBtn"
          onClick={() => MblAccMenu()}
        ></span>
        {/* TopBar */}
        <TopBar />
        <Switch>
          <Route exact path="/">
            {/* Home Componenet */}
            <Home />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>

        {/* Final */}
        {location && <ShippingLocation />}
      </>
    </Router>
  );
}

export default App;
