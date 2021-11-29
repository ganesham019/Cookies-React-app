import React, { Component } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <div>
        <HeaderComponent>
          <container-fluid>
            <p className="p-2 m-0 bg-dark text-white">
              Free shipping on all orders above <b>Rs.349/-</b>. Use code{" "}
              <b>CM15</b> for a Flat <b>15%</b> discount
            </p>
            <nav className="navbar navbar-expand-lg navbar-light " >
              <button
                className="navbar-toggler mr-5"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* <!-- laptop Device --> */}
              <a className="navbar-brand d-none d-md-block" href="#">
                <img
                  className=" "
                  src="https://www.cookiemanindia.com/assets/images/logo.svg"
                  alt=""
                />
              </a>
              {/* mobile device */}
              <a className="navbar-brand d-block d-md-none" href="#">
                <img
                  className="mr-auto"
                  src="https://www.cookiemanindia.com/assets/images/logo.svg"
                  alt=""
                />
              </a>

              <ul
                id="menuicon"
                className=" d-block d-md-none  list-unstyled  my-lg-0 "
              >
                <li>
                  <BsBoxArrowInRight />
                </li>
                <li>
                  <FaShoppingCart />
                </li>
              </ul>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav offset-sm-2"  >
                <Link to='/'>
                  <li className="nav-item  ">
                    <a className="nav-link" >
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  </Link>

                 
                  {/* <li className="nav-item ">
                    <a className="nav-link" to='/cookies'>
                      Buy Cookies
                    </a>
                  </li> */}
                  
                  <li class="dropdown nav-item">
                    <a href="">
  <button class="dropbtn nav-link">Buy Cookies</button></a>
  <div class="dropdown-content">
  <Link to='/allcookies'> <a href="#">All Cookies</a></Link>
  <Link to='/chocolatecookies'> <a href="#">Chocolate Cookies</a></Link>
  <Link to='/specialitycookies'> <a href="#">Speciality Cookies</a></Link>
  <Link to='/grownetcookies'> <a href="#">Grownet Cookies</a></Link>
  <Link to='/moufinbrownies'><a href="#">Moufin and Brownies</a></Link>
  <Link to='/healthwellness'><a href="#">Health and Wellness</a></Link>
  <Link to='/gifttins'><a href="#">Gift Tins</a></Link>
  <Link to='/comboproducts'> <a href="#">Combo Products</a></Link>
  </div>
</li>

                  <Link to='/StoreLocator'>
                  <li className="nav-item ">
                    <a className="nav-link" to='/storelocator'>
                      Store Locator
                    </a>
                  </li>
                  </Link>

                  <Link to='/bulkenquiry'>
                  <li className="nav-item ">
                    <a className="nav-link" to="/bulkenquiry">
                      Bulk Enquiry
                    </a>
                  </li>
                  </Link>

                  <Link to='/contact'>
                  <li className="nav-item">
                    <a className="nav-link " to='/contact'>
                      Contact Us
                    </a>
                  </li>
                  </Link>

                  <Link to='/ordertracking'>
                  <li className="nav-item">
                    <a className="nav-link" to='/ordertracking'>
                      Order Tracking
                    </a>
                  </li>
                  </Link>
                </ul>

                {/* Mobile Device */}
                <ul className="IconsHead d-none d-md-none form-inline my-1 my-lg-0 list-unstyled offset-sm-1">
                  <li>
                    <BsBoxArrowInRight />
                  </li>
                  <li>
                    <FaShoppingCart />
                  </li>
                </ul>
                {/* laptop device */}

                <ul
                  id="menuicon"
                  className=" d-none d-md-block my-2  list-unstyled  offset-sm-1"
                >
                  <li>
                    <BsBoxArrowInRight />
                  </li>
                  <li>
                    <FaShoppingCart />
                  </li>
                </ul>
              </div>
            </nav>
          </container-fluid>
        </HeaderComponent>
      </div>
    );
  }
}

export default Header;

const HeaderComponent = styled.div`
   {
    .navbar{
      background-color: rgb(255, 230, 184);
      
    }
    .navbar img {
      width: 170px;
    }
   .navbar-nav a{
     text-decoration:none;
   }
    .nav-item .nav-link {
      text-decoration: none;
      text-transform:none;
      color: rgb(126, 46, 46);
      letter-spacing: 1px;
      font-weight: 600;
    }
    .nav-item .nav-link :hover {
      color: rgb(182, 93, 93);
      text-decoration: none;
      
    }

    ul#menuicon li {
      display: inline;
      margin-right: 20px;
      font-size: 20px;
      color: rgb(126, 46, 46);
    }
    ul#menuicon li :hover {
      color: rgb(182, 93, 93);
    }

    .dropbtn {
      padding: auto;
      background-color:transparent;
      font-size: 16px;
      border: none;
    }
    
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 250px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    .dropdown-content a {
      color: black;
      padding: 8px ;
      text-decoration: none;
      display: block;
    }
    
    .dropdown-content a:hover {background-color: rgb(94, 4, 4); color:white;}
    
    .dropdown:hover .dropdown-content {display: block;}
    
   


    @media (max-width: 760px) {
      .navbar-brand {
        margin-left: -13%;
      }
    }
  }
`;
