import React, { Component } from "react";
import styled from "styled-components";

export class Footer extends Component {
  render() {
    return (
      <div>
        <FooterComponent>
          <div class="container-fluid Footer ">
            <div class="container ">
              <div class="row pb-5 pt-5">
                <div className="col-sm-6  ">
                  <div class="row">
                    <div className="col  text-left">
                      <p className="FHead">Quick Links</p>
                      <ul className="FHead2 list-unstyled">
                        <li>Store Locator</li>
                        <li>Bulk Enquiry</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>My Account</li>
                        <li>Contact Us</li>
                      </ul>
                    </div>
                    <div className="col text-left">
                      <p className="FHead">BUY COOKIES ONLINE</p>
                      <ul className="FHead2 list-unstyled">
                        <li> All Cookies</li>
                        <li>Chocolate Cookies</li>
                        <li>Speciality Cookies</li>
                        <li>Gourmet Cookies</li>
                        <li>Muffins and Brownies</li>
                        <li>Health and Wellness</li>
                        <li>Gift Tins</li>
                        <li>Combos And Deals</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6  ">
                  <div class="row">
                    <div className="col-sm-6  text-left">
                      <p className="FHead">CONTACT INFO</p>

                      <ul className="FHead2 list-unstyled">
                        <li>
                          {" "}
                          Australian Foods India Pvt Ltd, Plot No. 22 & 23,
                          Ambattur Industrial Estate, Chennai 600058
                        </li>
                        <li>044 42083732</li>
                        <li>admin@cookiemanindia.com</li>
                        <li>10am to 6pm ( Monday – Friday )</li>
                      </ul>
                    </div>
                    <div className="col-sm-6  text-left">
                      <p className="FHead">KEEP IN TOUCH</p>
                      <form className="form" action="/action_page.php">
                        <input
                          type="text"
                          placeholder="Search.."
                          name=" Your Email"
                        />
                        <button type="submit">
                          <i class="fa fa-arrow-right icon"></i>
                        </button>
                      </form>

                      <p className="FHead mt-5">Follow Us</p>
                      <ul className="Socialicon list-unstyled">
                        <li>
                          <img
                            src="https://www.cookiemanindia.com/assets/images/svg/twitter_icon.svg"
                            class="img-fluid "
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://www.cookiemanindia.com/assets/images/svg/facebook_icon.svg"
                            class="img-fluid "
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://www.cookiemanindia.com/assets/images/svg/instagram_icon.svg"
                            class="img-fluid "
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://www.cookiemanindia.com/assets/images/svg/youtube_icon.svg"
                            class="img-fluid "
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://www.cookiemanindia.com/assets/images/svg/linkedin_icon.svg"
                            class="img-fluid "
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className="Payment pt-5 pb-3">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="https://www.cookiemanindia.com/assets/images/razorpay-payment.png"
                      class="img-fluid "
                      alt=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="https://www.cookiemanindia.com/assets/images/cg-logo.png"
                      class="img-fluid "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FooterComponent>
      </div>
    );
  }
}

export default Footer;

const FooterComponent = styled.div`
   {
    .Footer {
      background-color: rgb(255, 228, 193);
    }
    .FHead {
      font-size: 20px;
      font-family: "Yanone Kaffeesatz", sans-serif;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .FHead2 {
      font-size: 15px;
      font-family: "Varela", sans-serif;
    }
    .FHead2 li {
      margin-top: 5px;
    }
    .FHead2 li:hover {
      margin-left: 10px;
      transition: 1.5s;
    }
    .icon {
      color: white;

      border: none;
    }
    button {
      background-color: brown;
      border: none;
    }
    .form input {
      border: none;
    }
    input[type="text"],
    button {
      padding: 6px;
      border: none;
      font-size: 17px;
    }
    .Socialicon img {
      width: 40px;
      height: 30px;
    }
    .Socialicon li {
      width: 60px;
      display: inline;
      margin: 0px;
    }
    .Socialicon li img:hover {
      transition: 0.4s;
      margin-top: -8px;
    }
  }
`;
