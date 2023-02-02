import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Form from "./Components/Form";
import About from "./Components/About";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212934";
      showAlert("  Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("  Light mode has been enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Text Utils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}

      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Form showAlert={showAlert} heading="Play with your words" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
