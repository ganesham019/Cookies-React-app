import React, { Component } from "react";

export class StoreLocator extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="container text-center mt-5">
            <p className="Titles">Find A Store</p>

            <div class="row mt-5 mb-5 mx-auto justify-content-center text-center">
              <div class="col-md-3  justify-content-center">
                <select className="p-2 w-100  find2">
                   <option > Select State</option>
                  {/* <option disabled> Select Any state</option> */}
                  <option>New Delhi</option>
                  <option>Indore</option>
                  <option>Jaipur</option>
                  <option>Jodhpur</option>
                  <option>Chandigarh</option>
                  <option>Mumbai</option>
                  <option>Bengaluru</option>
                  <option>Lucknow</option>
                  <option>Amritsar</option>
                </select>
              </div>
              <div class="col-md-3">
              <select className="p-2 w-100 find2">
                   <option > Select City</option>
                  {/* <option disabled> Select Any state</option> */}
                  <option>New Delhi</option>
                  <option>Indore</option>
                  <option>Jaipur</option>
                  <option>Jodhpur</option>
                  <option>Chandigarh</option>
                  <option>Mumbai</option>
                  <option>Bengaluru</option>
                  <option>Lucknow</option>
                  <option>Amritsar</option>
                </select>
              </div>
              <div class="col-md-3">
                <div class="btn w-100 p-2  Find">
                  Find a Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreLocator;
