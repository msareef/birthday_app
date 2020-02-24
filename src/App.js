import React from "react";
import "./App.css";
import "antd/dist/antd.css";
//import styled from "styled-components";
import { Row, Col, Divider } from "antd";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Home from "./Home";
import AddBudget from "./AddBudget";
import UserDetails from "./UserDetails";
import Setting from "./Setting";

//import { ButtonGroup } from "./button";

function App() {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={22}>
          <Router>
            <Sidebar />
            {/* <ButtonGroup as="a" href="https://google.com" className="primary">
            Go to page
          </ButtonGroup>
          <ButtonGroup type="submit" className="primary">
            Submit
          </ButtonGroup>
          <ButtonGroup type="reset" className="btn-link">
            Reset
          </ButtonGroup>
          <ButtonGroup type="submit">
            <strong>Click!</strong>
          </ButtonGroup> */}

            <Divider />
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/AddBudget" component={AddBudget} />
            <Route path="/UserDetails" component={UserDetails} />
            <Route path="/Setting" component={Setting} />
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;
