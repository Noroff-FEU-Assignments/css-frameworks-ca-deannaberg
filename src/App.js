import React from "react";
import './sass/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

library.add(fab, faEnvelope, faPhone, faMapMarkerAlt);


function App() {

  return (
    <Router>
      <Navbar expand="lg" className="">
        <div className="container-sm container-md">
          <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <div className=" full-width d-flex flex-column justify-content-center flex-md-row justify-content-md-between align-items-md-baseline">
              <Nav className="mr-auto">
                <NavLink exact to="/" className="nav-link container-sm">
                  Home
                </NavLink>
                <NavLink to="/news" className="nav-link">
                  News
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </Nav>
              <Form inline className="mt-4 form-search">
                <InputGroup className="mb-3">
                  <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="primary" id="button-addon2">
                    GO
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar >

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      < Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch >
    </Router >
  );
}
export default App;
