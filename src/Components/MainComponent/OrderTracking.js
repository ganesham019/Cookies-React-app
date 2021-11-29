import React, { Component } from "react";
import styled from "styled-components";

export class OrderTracking extends Component {
  render() {
    return (
      <TrackOrdersComponent>
        <div class="container-fluid">
          <div class="container text-center  mt-5">
            <p className="Titles">Track A Order</p>
            <div class="Tracks TrackOrder mt-5 mb-5 justify-content-center">
              {/* <div class="row">
                <div class="col-lg-12 text-center"> */}
                  <ul class="list-unstyled p-3 mt-2">
                  <li><div class="col text-center d-none d-md-block">
                     
                     {" "}
                     <input
                       type="text"
                       className=" p-2 Firstone mt-3"
                       name="Enter Your Order id"
                       placeholder="Enter your id"
                     />{" "}
                   
                 </div></li>
                  <li><div class="col text-center d-block d-md-none">
                     
                        {" "}
                        <input
                          type="text"
                          className=" p-2 First mt-3"
                          name="Enter Your Order id"
                          placeholder="Enter your id"
                        />{" "}
                      
                    </div></li>
                    <li> <div class="col text-center">
                     
                        {" "}
                        <div className="btn  p-2  Second">Track Order</div>
                     
                    </div></li>
                    <li> <div class="col text-center">
                      
                        {" "}
                        <div className="btn  p-2  Third">Clear</div>
                     
                    </div> </li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </div>
        </div> */}
      </TrackOrdersComponent>
    );
  }
}

export default OrderTracking;

const TrackOrdersComponent = styled.div`
   {
    .TrackOrder {
      background-color: rgb(255, 232, 243);
    }
    .TrackOrder li{
display:inline-block;
margin:5px;
    }
    .Firstone{
      border:1px solid lightgrey !important;
      color:grey;
      width:360px;
      height:auto;
      font-weight:bold;
    }
    .First{
      border:1px solid lightgrey !important;
      color:grey;
      width:100%;
      height:auto;
      font-weight:bold;
    }
    .Second{
      background-color:#332421;
      color:white;
    font-weight:bold;
    width:auto;
    }
    .Third{
      background-color:lightgrey;
      color:black;
      font-weight:bold;
      width:auto;
  
    }
    .btn:hover{
color:black;
background-color:lightgrey;
    }
  }
`;
