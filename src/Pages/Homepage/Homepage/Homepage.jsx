import React from "react";
import Navigation from "../../../Components/Navbar/Navbar"
import product from "../../../assets/products.svg";
import "./Homepage.css";
import Pricing from "../../Pricing/Pricing";

const Homepage = () => {
  return (
    <>
      <Navigation />

      <main>
        <section className="first-section">
          <small>
            <p>Your best bet in management</p>
          </small>
          <div className="manage-inventory">
            <h1>
              Manage and track various aspects of <br /> <span>inventory</span>
            </h1>
            <p>
              Inventory system to control and manage proucts in the warehouse in
              real time and integrated to make it easier to develop your
              business.
            </p>
          </div>

          <div className="manage-inventory-btn">
            <button>Get Free Trial</button>
            <button>Contact us</button>
          </div>
          <div className="manage-image">
            <img src={product} alt="manage-image" />
          </div>
        </section>
      </main>
      <section>
        <div>
          <Pricing />
        </div>
      </section>
    </>
  );
};

export default Homepage;
