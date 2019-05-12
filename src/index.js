import React from "react";
import { render } from "react-dom";
import Logo from "./Logo";
import { Router, Link } from "@reach/router";
import Registration from "../pages/registration";

// 1. a top level component renders a router
const App = () => (
  <div>
    <Logo />
    <nav>
      <Link to="/">Home</Link> - <Link to="dashboard">Dashboard</Link> -{" "}
      <Link to="register">Registration</Link>
    </nav>
    <Router>
      <Home path="/" />
      {/* make sure to use /* so child routes
          have a chance to match */}
      <Dashboard path="dashboard/*" />
      <Registration path="register/*" />
    </Router>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <nav>
      <Link to="./">Dashboard Home</Link> - <Link to="team">Team</Link> -{" "}
      <Link to="projects">Projects</Link>
    </nav>

    {/* 2. You can render a router anywhere
        down the tree, you don't have to have
        a top-level router with every route
        declared up front, this is quite helpful
        for really large apps */}
    <Router>
      <DashboardHome path="/" />
      <Team path="team" />
      <Projects path="projects" />
    </Router>
  </div>
);

const Home = () => <h2>Home</h2>;
const DashboardHome = () => <h2>Dashboard Home</h2>;
const Team = () => <h2>Team</h2>;
const Projects = () => <h2>Projects</h2>;

render(<App />, document.getElementById("root"));
