import React from "react";
import logo from "./Passport photograph.jpg";
import "./App.css";
import ShowComponent from "./components/showComponent";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-content">
          <h1>Welcome to Cynthia's Portfolio</h1>
          <p>
            Below are some of my works. I have experience with the following
            languages and frameworks:
          </p>
          <ul>
            <li>React JS</li>
            <li>React Native</li>
            <li>JavaScript</li>
            <li>Firebase</li>
            <li>Python</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>SQL</li>
            <li>GCP and AWS</li>
          </ul>
        </div>
        <div className="header-image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="body">
        <ShowComponent />
      </div>
    </div>
  );
}

export default App;
