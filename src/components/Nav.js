import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBIcon } from "mdbreact";

class Nav extends Component {
  render() {
    return (
      <>
        <MDBNavbar className="z-depth-0" dark transparent>
          <MDBNavbarBrand>
            <h2 className="my-1 title-text">
              <MDBIcon icon="grin-squint-tears" size="lg" className="mr-2"/>
              <span className="text-dark">GIF</span>Match
            </h2>
          </MDBNavbarBrand>
        </MDBNavbar>
      </>
    );
  }
}

export default Nav;
