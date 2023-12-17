import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
   

    this.onChange = (event) => {
      // Call the parent callback function
      // this.value1 = document.querySelector("#searchvalue").value;
      this.value1 = event.target.value;
      this.props.parentCallback(this.value1);
      // console.log(this.value1)
    };

    // this.onclick=(event)=>{
    //   this.value1 = document.querySelector("#countrycode").value;
    // }

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                  >
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                  >
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/technology/"}
                  >
                    technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/general"
                  >
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  id="searchvalue"
                  onChange={this.onChange}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link className="nav-link" to={this.value1}>
                  <button
                    className="btn btn-outline-success"
                    // onChange={this.onChange}
                    type="submit"
                  >
                    Search
                  </button>
                </Link>
              </form>
            </div>
          </div>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              countries
            </button>
            <ul className="dropdown-menu">
              <li>
                {" "}
                <Link className="nav-link" value="in"  to="/in">
                  India
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link" to="/us">
                  America
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link" to="/jp">
                  Japan
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
