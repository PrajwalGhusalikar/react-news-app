import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "../src/App.css";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  state = {
    name: this.name ? this.name : "us",
  };

  // Callback function to handle data received from the
  //child component
  handleCallback = (childData) => {
    // Update the name in the component's state
    this.setState({ name: childData });
    // just for testing remove this after test
    {
      console.log(
        "process.env.REACT_APP_NEWS_API_KEY-----",
        process.env.REACT_APP_NEWS_API_KEY
      );
    }
    /**ends here */
  };

  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  render() {
    const { name } = this.state;
    return (
      <div>
        <Router>
          <Navbar parentCallback={this.handleCallback} />
          {/* <Navbar /> */}

          {console.log("name", name)}
          <Routes>
            <Route
              exact
              path={"/technology"}
              element={
                <News
                  apiKey={this.apiKey}
                  key={"technology"}
                  pageDisplayed={6}
                  country={name}
                  category={"technology"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"sports"}
                  pageDisplayed={6}
                  country={name}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"business"}
                  pageDisplayed={6}
                  country={name}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"science"}
                  pageDisplayed={6}
                  country={name}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"health"}
                  pageDisplayed={6}
                  country={name}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"general"}
                  pageDisplayed={6}
                  country={name}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path={name}
              element={
                <News
                  apiKey={this.apiKey}
                  key={name}
                  pageDisplayed={6}
                  country={name}
                  category={"general"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
