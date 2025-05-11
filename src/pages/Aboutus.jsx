import React from 'react';
import './About.css';
import { FaBookOpen, FaExchangeAlt, FaMoneyBillWave, FaTruck } from 'react-icons/fa';

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to our Bookstore platform — your one-stop destination to <strong>buy</strong>, <strong>sell</strong>, <strong>rent</strong>, or <strong>lend</strong> books with ease!
      </p>

      <h2>📘 Key Features:</h2>
      <ul>
        <li><FaBookOpen className="icon" /> <strong>Buy or Rent Books:</strong> Explore a wide range of books and choose to either buy or rent them at your convenience.</li>
        <li><FaExchangeAlt className="icon" /> <strong>Sell or Lend Books:</strong> Earn money by listing your books for sale or lending them to fellow readers.</li>
        <li><FaMoneyBillWave className="icon" /> <strong>Cash on Delivery (COD):</strong> All transactions are safely handled through a cash-on-delivery system.</li>
        <li><FaTruck className="icon" /> <strong>User-Managed Delivery:</strong> Users are responsible for delivery using apps like Uber, Dunzo, or Swiggy Genie for flexibility and speed.</li>
      </ul>

      <p>
        Whether you're decluttering your shelf, saving money, or seeking hidden literary gems, our community-first platform is here to help you do it all.
      </p>
    </div>
  );
}

export default About;
