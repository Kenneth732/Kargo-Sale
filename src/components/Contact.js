import React from "react";
// import { Link } from 'react-router-dom'
import './Contact.css'
function Contact() {
    return (
        <div>


<section class="contact">
  <div class="contact-container">
    <h2>Contact Us</h2>
    <p>Have any questions? We'd love to hear from you!</p>
    <form>
      <div class="form-group">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div class="form-group">
        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
      </div>
      <button type="submit" class="btn">Send Message</button>
    </form>
  </div>
</section>




        </div>
    )
}

export default Contact