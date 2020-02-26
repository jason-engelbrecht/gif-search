import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Router>
        <MDBNavbar className="my-navbar z-depth-0" dark transparent>
          <MDBNavbarBrand>
            <h2 className="my-1">
              <MDBIcon icon="grin-squint-tears" size="lg" className="mr-2"/>
              GIF Match
            </h2>
          </MDBNavbarBrand>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                Sign Up
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Nav;
