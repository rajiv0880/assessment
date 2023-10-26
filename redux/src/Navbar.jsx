import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link , Outlet} from 'react-router-dom';
// import React frosm 'react';


export default function Navbar() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand><Link to="/home">LOGO</Link></MDBNavbarBrand>
        {/* <MDBInputGroup tag="form" className='d-flex w-auto mb-3'> */}
            <Link to="login">Login</Link>
        {/* </MDBInputGroup> */}
      </MDBContainer>
    </MDBNavbar>
    <Outlet></Outlet>
    </>
  );
}