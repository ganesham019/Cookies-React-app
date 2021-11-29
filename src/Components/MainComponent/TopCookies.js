import React, { Component } from "react";
import CookiesInfo from "../DataContext/CookiesInfo";
import { InfoConsumer } from "../DataContext/Context";
import styled from "styled-components";

import { FaShoppingCart } from "react-icons/fa";
export class TopCookies extends Component {
  render() {
    return (
      <TopCookiesComponent>
        <div className="container d-none d-md-block">
          <div className="row mb-5 mt-3 mx-auto">
            <div class="col-sm-9 text-left">
            <p className="Titles mt-5  text-left">TOP SELLING COOKIES</p>
            <p className="text-muted">Our products are made with the highest quality ingredients with best in industry standard practices.</p>
              <div className="row">
                <InfoConsumer>
                  {(value) => {
                    return value.CookiesInfo.map((item, i) => {
                      return (
                        <CookiesInfo key={item.id} item={item} index={i} />
                      );
                      // key should be provided for list items.
                      // key is to use a string that uniquely identifies a list item
                    });
                  }}
                </InfoConsumer>
              </div>
            </div>
            <div class="col-sm-3 text-left  ">
            <p className="Titles mt-5  text-left">Deals of the Weak</p>
            <p className="text-muted">All Deals are made with love.</p>
              <div className="Count-card itemsOne">
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/des_849474.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
              
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/Coo_362648.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/Par_786472.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/lif_303176.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-block d-md-none">
          <InfoConsumer>
            {(value) => {
              return value.CookiesInfo.map((item, i) => {
                return <CookiesInfo key={item.id} item={item} index={i} />;
                // key should be provided for list items.
                // key is to use a string that uniquely identifies a list item
              });
            }}
          </InfoConsumer>

         
          <div className="Count-card itemsOne">
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/des_849474.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
              
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/Coo_362648.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/Par_786472.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
                <div class="card text-center">
                  <img class="card-img-top" src="https://d2c9sbqai53mpd.cloudfront.net/deal-images/lif_303176.jpg" alt="" />
                  <div class="card-body">
                    <h3 class="card-title"><bold>Party Combo</bold></h3>
                    <small>1 Packet</small>
                    <h1 ><bold>₹549.00</bold> </h1>
                    <h4 class="text-muted"><del>₹720.00</del></h4>
                    <p><medium>(Incl.of Taxes)</medium></p>
                    <div class="btn CB mx-auto w-50 mt-5 p-1">
                      {" "}
                      <FaShoppingCart /> &nbsp; Add to Cart
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </TopCookiesComponent>
    );
  }
}
export default TopCookies;

const TopCookiesComponent = styled.div`
   {
    .container {
      overflow: hidden;
      font-family: "Yanone Kaffeesatz", sans-serif;
    }
    .card{
      border:1px solid  rgb(255, 198, 157);;
    }
    .card-body {
      background-color: #fff5e7;
    }
  }
`;
