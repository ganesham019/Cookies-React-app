import React, { Component } from "react";
import { InfoConsumer } from "./Context";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
class CookiesInfo extends Component {
  render() {
    const { id, img, CName, CPrice, gram1, gram2 } = this.props.item;

    return (
      <InfoConsumer>
        {(value) => (
          <CookiesInfoStyle>
            <div class=" TopCookies m-0 p-0">
              <div class="card TC mt-1 mb-1 pl-0 ">
                <a href="#" class="">
                <img class="card-img-top" src={img} alt="" />
                </a>
                <div class="card-body">
                  <h4 class="card-title">{CName}</h4>
                  <div class="row flow ">
                    <p class="t1 ml-3">{CPrice}</p>
                    <p class="text-muted">
                      <del>₹365.00</del>
                    </p>
                    <p>(Incl.of taxes)</p>
                  </div>
                  <div class="row">
                    <div class="dropdown ml-3 mt-2">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Grams &nbsp; &nbsp; &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu w-25">
                        <li>
                          <a
                            href="#"
                            class="text-muted text-center text-decoration-none"
                          >
                            &nbsp;{gram1}
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-muted text-center text-decoration-none"
                          >
                            &nbsp;{gram2}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="btn CB mx-auto p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CookiesInfoStyle>
        )}
      </InfoConsumer>
    );
  }
}

const CookiesInfoStyle = styled.header`
   {
    
      .TopCookies .card{
        margin: 5px;
        width: 260px;
        height: auto;
        font-family: "Yanone Kaffeesatz", sans-serif;
      }
    .card-title {
      font-family: "Yanone Kaffeesatz", sans-serif;
      font-size: 23px;
      font-weight: bold;
      line-height: 10px;
    }
    .card{
      border: 1px solid rgb(255, 198, 157);;
    }
    .card-body {
      background-color: rgb(138, 68, 18);
    }
    .flow {
      max-width: 210px;
      line-height: 22px;
    }
    .flow p {
      font-weight: bold;
      margin: auto;
    }
    .t1 {
      font-size: 23px;
    }
    .dropdown {
      background-color: white;
      width: 40%;
      height: 35px;
      border: 0.5px solid lightgrey;
      border-radius: 10px;
    }
    .dropdown button {
      height: 35px;
    }
    @media(max-width: 768px) {
      .TopCookies .card{
        
        width: auto;
        height: auto;
        font-family: "Yanone Kaffeesatz", sans-serif;
      }
     
    }
  }
`;

export default CookiesInfo;
