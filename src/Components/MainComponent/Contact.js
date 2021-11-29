import React, { Component } from "react";
import styled from "styled-components";
import {AiOutlineMail,AiOutlineWhatsApp} from "react-icons/ai";

export class Contact extends Component {
  render() {
    return (
      <div>
        <ContactComponent>
          <div class="container mb-5">
            <p className="Titles mt-5  text-left">Contact Us</p>
            <div class="row">
              <div class="col-lg-7">
                <div class="row">
                  <div class="col">
                    <label class="" name="" id="label">
                      Full Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className=" p-2 First "
                      name="Enter Your Order id"
                      placeholder="Enter  Full Name"
                    />{" "}
                  </div>
                  <div class="col">
                    <label class="" name="" id="label">
                      Contact Number <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className=" p-2 First "
                      name="Enter Your Order id"
                      placeholder="Enter  contact No"
                    />{" "}
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label class="" name="" id="label">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className=" p-2 First "
                      name="Enter Your Order id"
                      placeholder="Enter your Email Address"
                    />{" "}
                  </div>
                  <div class="col">
                    <label class="" name="" id="label">
                      Subject <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className=" p-2 First "
                      name="Enter Your Order id"
                      placeholder="Enter your Subject"
                    />{" "}
                  </div>
                </div>
                <label class="mt-3" name="" id="label">
                  Message<span class="text-danger">*</span>
                </label>
                <div class="col mt-3">
                  <textarea
                    className="First2"
                    id="story"
                    name="story"
                    rows="6"
                    placeholder=" ..Type here"
                  ></textarea>
                </div>
                <div className="col text-right">
                <div className="btn p-2 mb-5 mt-3  First3">
                    Send 
                    </div>
            </div>
              </div>
              <div className="col-lg-5 mt-4 SecCol p-4">
              <p className="Titles2 mt-3"><AiOutlineMail/> &nbsp; Email (or) <AiOutlineWhatsApp/> &nbsp; Whaptsapp</p>
              <section className="mt-2 para1">
                  <p className="m-0"><b>Career:</b></p>
                  <p className="m-0"><AiOutlineMail/> &nbsp;hr@cookiemanindia.com</p>
                  <p className="m-0"><AiOutlineWhatsApp/> &nbsp; +91 90030 43770</p>
              </section>
              <section className=" para1">
                  <p className="m-0"><b>Franchise:</b></p>
                  <p className="m-0"><AiOutlineMail/> &nbsp;bdm@cookiemanindia.com</p>
                  <p className="m-0"><AiOutlineWhatsApp/> &nbsp; +91 90030 43770</p>
              </section>
              <section className=" para1">
                  <p className="m-0"><b>Customer Care:</b></p>
                  <p className="m-0"><AiOutlineMail/> &nbsp; customercare@cookiemanindia.com</p>
                  <p className="m-0"><AiOutlineWhatsApp/> &nbsp; +91 90030 43770</p>
              </section>
              <section className=" para1">
                  <p className="m-0"><b>Raw Materials Purchase:</b></p>
                  <p className="m-0"><AiOutlineMail/> &nbsp;purchase@cookiemanindia.com</p>
                  <p className="m-0"><AiOutlineWhatsApp/> &nbsp; +91 90030 43770</p>
              </section>
              <section className=" para1">
                  <p className="m-0"><b>Cookie Sales:</b></p>
                  <p className="m-0"><AiOutlineMail/> &nbsp;paulraj@cookiemanindia.com</p>
                  <p className="m-0"><AiOutlineWhatsApp/> &nbsp; +91 90030 43770</p>
              </section>
              </div>
              
            </div>

            {/* <iframe src="https://www.google.com/maps/@13.022478,80.198654,15z" className="mt-5" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe> */}
          

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" height="400px" width="100%" className="mt-5" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </ContactComponent>
      </div>
    );
  }
}

export default Contact;
const ContactComponent = styled.div`
   {
    .First {
      border: 0.5px solid lightgrey;
      width: 100%;
      text-transform: capitalize;
      border-radius: 5px;
    }
    .SecCol {
      background-color: #ffe6c3;
      border-radius:20px;
    }
    label {
      font-weight: bold;
    }
    .row {
      margin-top: 20px;
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
  }
`;
