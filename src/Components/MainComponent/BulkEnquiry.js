import React, { Component } from "react";
import styled from "styled-components";

export class BulkEnquiry extends Component {
  render() {
    return (
      <BulkEnquiryComponent>
        <div class="container  ">
          <p className="Titles mt-5  text-center">Track A Order</p>
          <div class="col-lg-8 BulkEnquiry p-3  mx-auto">
            <div class="row">
              <div class="col">
                <label class="" name="" id="label">
                  Company and Organization Name{" "}
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className=" p-2 First "
                  name="Enter Your Order id"
                  placeholder="Enter your id"
                />{" "}
              </div>
              <div class="col">
                <label class="" name="" id="label">
                  Contact Person <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className=" p-2 First "
                  name="Enter Your Order id"
                  placeholder="Enter your id"
                />{" "}
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label class="" name="" id="label">
                  Contact Number<span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className=" p-2 First "
                  name="Enter Your Order id"
                  placeholder="Enter your Contact Number"
                />{" "}
              </div>
              <div class="col">
                <label class="" name="" id="label">
                  Email id <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className=" p-2 First "
                  name="Enter Your Order id"
                  placeholder="Enter your Email id"
                />{" "}
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label class="" name="" id="label">
                  City
                </label>
                <input
                  type="text"
                  className=" p-2 First "
                  name="Enter Your Order id"
                  placeholder="Enter your City"
                />{" "}
              </div>
              <div class="col">
                <label class="" name="" id="label">
                  Pincode<span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className=" p-2 First "
                  name="Enter Your Order id"
                  placeholder="Enter your Pincode"
                />{" "}
              </div>
            </div>
            <label class="mt-3" name="" id="label">
              Requirements<span class="text-danger">*</span>
            </label>
           
            <div class="col">
              <textarea
              className="First2"
                id="story"
                name="story"
                rows="8"
                cols="53"
                placeholder=" ..Type here"
              ></textarea>
            </div>
            <div className="col">
                <div className="btn p-2 mb-5 mt-3 First3">
                    Send Enquiry
                    </div>
            </div>
          </div>
        </div>
      </BulkEnquiryComponent>
    );
  }
}

export default BulkEnquiry;
const BulkEnquiryComponent = styled.div`
   {
    .BulkEnquiry {
      background-color: #ffe6c3;
      margin-bottom:10%;
    }
    .First {
      border: 0.5px solid lightgrey;
      width: 100%;
      text-transform: capitalize;
      border-radius: 5px;
    }
    .First2 {
      border: 0.5px solid lightgrey;
      width: 100%;
      height: 150px;
      text-align: justify;
      text-transform: capitalize;
      border-radius: 5px;
    }
    .First3{        
          background-color:#332421;
            color:white;
          font-weight:bold;
          width:300px;
          
    }
    .row {
      margin-top: 20px;
    }
    label {
      font-weight: bold;
    }
  }
`;
