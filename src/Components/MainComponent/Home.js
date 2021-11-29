import React, { Component } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import TopCookies from "./TopCookies";
export class Home extends Component {
  render() {
    return (
      <div>
        <HomeComponent>
          <div className="container-fluid m-0 p-0">
            <div
              id="carouselId"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <!-- <ol className="">
      <li data-target="#carouselId" data-slide-to="0" className="active"></li>
      <li data-target="#carouselId" data-slide-to="1"></li>
      <li data-target="#carouselId" data-slide-to="2"></li>
      <li data-target="#carouselId" data-slide-to="3"></li>
      <li data-target="#carouselId" data-slide-to="4"></li>
    </ol> --> */}
              <div className="carousel-inner CookiesCarousel" role="listbox">
                <div className="carousel-item active">
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/banner-images/192_834244.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/banner-images/192_102319.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/banner-images/192_497857.jpg"
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/banner-images/192_489219.jpg"
                    alt="fourth slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/banner-images/192_219146.jpg"
                    alt="fifth slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselId"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon "
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselId"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <br />
          <TopCookies />
          {/* laptop device */}
          <div class="container-fluid Category d-none d-md-block mb-5 ">
            <div class="container  text-center">
              <p class="Cat1 pt-5 ">Explore Categories</p>
              <p class="Cat2 mt-4">
                Our products are made with the highest quality ingredients with
                best in industry standard practices.
              </p>

              <div class="items  text-left mt-4">
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/5.j_981542.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Gifts Tins</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>

                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Muf_464436.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Muffins and Brownies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Spe_454196.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Speciality Cookies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Cho_700817.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Chochlate cookies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/hw%20_432963.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Health and welness</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Alm_411369.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Gowrnet Cookies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile device */}
          <div class="container-fluid Category d-block d-md-none mb-5 ">
            <div class="container  text-center">
              <p class="Cat1 pt-5 ">Explore Categories</p>
              <p class="Cat2 mt-4">
                Our products are made with the highest quality ingredients with
                best in industry standard practices.
              </p>

              <div class="items2  text-left mt-4">
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/5.j_981542.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Gifts Tins</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>

                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Muf_464436.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Muffins and Brownies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Spe_454196.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Speciality Cookies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Cho_700817.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Chochlate cookies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/hw%20_432963.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Health and welness</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Alm_411369.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="bottom-left">Gowrnet Cookies</div>
                  <div class="bottom-left2">Starting from $110</div>
                </div>
              </div>
            </div>
          </div>

          {/* laptop Device Instagram     */}
          <div class="container-fluid InstagramCategory  mb-5 ">
            <div class="container  text-center">
              <p class="Cat1 pt-5 ">FOLLOW US ON INSTAGRAM</p>
              <p class="Cat3 mt-4">#cookie_man_india</p>

              <div class="items3 d-none d-md-block text-left mt-4">
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/5.j_981542.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Muf_464436.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Spe_454196.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Cho_700817.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/hw%20_432963.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Alm_411369.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Spe_454196.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Cho_700817.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/hw%20_432963.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div class="items4 d-block d-md-none  mt-4">
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/5.j_981542.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Muf_464436.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Spe_454196.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Cho_700817.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/hw%20_432963.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Alm_411369.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Spe_454196.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/Cho_700817.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://d2c9sbqai53mpd.cloudfront.net/category-images/hw%20_432963.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div class="btn Brown mt-4 text-center">
                <FaInstagram className="text-center" />
                &nbsp;Follow
              </div>
            </div>
          </div>
          <div class="container-fluid ManIndia">
            <div class="container">
              <p class="Cat1 pt-5 ">COOKIE MAN INDIA</p>
              <p className="Cat2 mt-5 text-left">
                Australian Foods (I) Pvt. Ltd., the makers of Cookie Man cookies
                commenced its business operations in India in January 2000. The
                lack of recognized cookie players in India motivated Australian
                Foods to enter the market and open its first store in Chennai in
                January 2000. Cookie Man cookies have rapidly grown to become
                synonymous with international quality and are today the #1 brand
                of fresh baked cookies in the country.Currently, Cookie Man
                operates 50 outlets in 17 cities in NCR, Gurgaon, Jaipur,
                Bhopal, Ahmedabad, Baroda, Surat, Mumbai, Pune, Chennai,
                Bangalore, Coimbatore, Hyderabad, Kolkata, Mangalore,
                Bhubaneshwar, Udaipur and Port Blair.
              </p>
              <p className="Cat2 mt-2 text-left">
                The Cookie Man product line is unique, of high quality and good
                value for money. In India too, the cookies are made from the
                finest ingredients available, ensuring that the products meet
                stringent global quality and consistency guidelines. All cookie
                dough, toppings and related materials are produced in the Cookie
                Man Commissary in Chennai.
              </p>

              <p className="Cat2 mt-2 text-left">
                Cookie Man markets a diverse line of fresh baked Australian
                cookies in India. There are more than fifty varieties of cookies
                available. The flavours include Choc Chip, Coffee Walnut, Brandy
                Snap, Honey and Oats, Coconut Macaroon, Shortbread, Peanut,
                Ginger and many, many more. Even the famous Australian “Anzac”
                cookie is available right here in India.
              </p>

              <p className="Cat2 m-0 text-left">
                Australian Foods has developed an efficient and successful
                franchising model that has been leveraged to increase operations
                in India at a rapid pace. Based on a shared passion for food
                retail, effective communication, we have forged successful
                partnerships with our franchisees across India.
              </p>
            </div>
          </div>
        </HomeComponent>
      </div>
    );
  }
}

export default Home;

const HomeComponent = styled.div`
   {
    .CookiesCarousel img {
      width: 100%;
    }
    .Category {
      background-color: #fdedee;
    }

    .Cat1 {
      font-size: 40px;
      text-transform: uppercase;
      font-family: "Yanone Kaffeesatz", sans-serif;
    }

    .Cat2 {
      font-size: 15px;
      font-family: "Varela", sans-serif;
      padding-bottom: 20px;
    }
    .Cat3 {
      font-size: 30px;
      font-weight: bold;
      font-family: "Varela", sans-serif;
      padding-bottom: 20px;
    }

    .items div {
      margin: 6px;
      overflow: hidden;
    }

    .items3 div {
      margin: 6px;
      overflow: hidden;
    }
    .items img {
      position: relative;
      text-align: center;
      transform: scale(1.2);
    }
    .items img:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.6s ease;
    }
    .items3 img {
      height: 200px;
      width: 250px;
    }

    .bottom-left {
      position: relative;
      top: -70px;
      left: 20px;
      font-size: 24px;
      color: white;
      letter-spacing: 1px;
      font-weight: bold;
      font-family: "Yanone Kaffeesatz", sans-serif;
    }
    .bottom-left2 {
      position: relative;
      top: -70px;
      left: 20px;
      font-size: 12px;
      color: white;
      letter-spacing: 1px;
      font-weight: bold;
      font-family: "Varela", sans-serif;
    }
    .Brown {
      width: 120px;
      padding: 10px;
      border: none;
      color: white;
      background-color: brown;
    }
    .ManIndia {
      background-color: lightgrey;
    }
  }
`;
