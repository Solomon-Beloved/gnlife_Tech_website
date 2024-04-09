import React from 'react'
import Navigation from '../../Components/Navbar/Navbar'
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Navigation />

      <main>
        <section className="first-section">
          <small className="">
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

          <div className='manage-inventory-btn'>
            <button>Get Free Trial</button>
            <button>Contact us</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage
