import React from 'react';
import Machine from '../assets/zax-removebg-preview.png'
function Home() {
    return (
        <div className='Container'>
        <section class="hero">
                <div class="hero-content">
                    <h1>Welcome to Eccomace</h1>
                    <p>Your Ultimate E-commerce Destination</p>
                    <a href="#" class="btn">Shop Now</a>
                </div>
            </section>

            <section class="features">
                <div class="feature">
                    <i class="fas fa-shipping-fast"></i>
                    <h3>Fast Shipping</h3>
                    <p>Get your orders delivered quickly and efficiently.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-lock"></i>
                    <h3>Secure Payments</h3>
                    <p>Shop with confidence using our secure payment system.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-headset"></i>
                    <h3>24/7 Customer Support</h3>
                    <p>Our dedicated support team is available around the clock.</p>
                </div>
            </section>
            <div className='Container-Content'>
                <div className='Card'></div>
            </div>
        </div>
    )

}
export default Home