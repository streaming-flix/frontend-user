import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';
import {Link} from "react-router-dom"

const Registration = () => {
  return (
    <MDBContainer className='m-3'>
    <MDBRow>
      <MDBCol md="6" className='m-auto'>
        <MDBCard>
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h5 className="dark-grey-text mb-2">
                <strong>Sign up FREE</strong>
              </h5>
              <p>Simply sign up and we'll give you FREE access to VIP!</p>
            </div>
            <MDBInput
              label="Your email"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your password"
              group
              type="password"
              validate
              containerClass="mb-0"
            />
            <div className="text-center mb-3">
            <MDBBtn color="primary">Sign Up</MDBBtn>
            </div>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

              or Sign up with:
            </p>
            <div className="row my-3 d-flex justify-content-center">
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="mr-md-3 z-depth-1a"
              >
                <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
              </MDBBtn>
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="mr-md-3 z-depth-1a"
              >
                <MDBIcon fab icon="twitter" className="blue-text" />
              </MDBBtn>
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="z-depth-1a"
              >
                <MDBIcon fab icon="google-plus-g" className="blue-text" />
              </MDBBtn>
            </div>
          </MDBCardBody>
          <MDBModalFooter className="mx-5 pt-3 mb-1">
            <p className="font-small grey-text d-flex justify-content-end">
              Have an account?
              < Link to="/Login" className="blue-text ml-1">

                Sign In
              </Link>
            </p>
          </MDBModalFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default Registration;