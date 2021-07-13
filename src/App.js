import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Gallery from "./pages/Gallery";
import SingleMealPage from "./pages/SingleMealPage";
import { ModalSwitch, ModalRoute } from "react-router-modal-gallery";
import Modal from "@material-ui/core/Modal";

function App() {
  return (
    <Router>
      <Navbar />
      <ModalSwitch
        renderModal={({ open }) => (
          <Modal open={open} scroll="body">
            <ModalRoute
              defaultParentPath="/"
              path="/singlemeal/:id"
              component={SingleMealPage}
            />
          </Modal>
        )}
      >
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/gallery" exact>
          <Gallery />
        </Route>
      </ModalSwitch>
    </Router>
  );
}

export default App;
