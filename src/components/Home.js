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

            <section className="about-section section-padding" id="section_2">
                <div className="container">
                    <div class="row align-items-center">

                        <div className="col-lg-5 col-12">
                            <small className="section-small-title">Our Story</small>

                            <h2 class="mt-2 mb-4"><span class="text-muted">Introducing</span> Moso</h2>

                            <h4 class="text-muted mb-3">Since 1986, We crafted interior products for better spaces</h4>

                            <p>Moso Interior is a free Bootstrap 5 HTML CSS template for your website. Tooplate is one of the best websites to download 100% free HTML Templates for web designers and developers around the world. Thank you for visiting.</p>
                        </div>

                        <div class="col-lg-3 col-md-5 col-5 mx-lg-auto">
                            <img src="https://cdn.leonardo.ai/users/950be092-1638-4663-b1e4-e57a20fd7679/generations/718e259a-742d-4d2f-b98a-5203080bc328/variations/Default_editorial_photograph_of_a_20_yo_woman_from_the_1940s_1_1_718e259a-742d-4d2f-b98a-5203080bc328_1.jpg" className="about-image about-image-small img-fluid" alt="" />
                        </div>

                        <div class="col-lg-4 col-md-7 col-7">
                            <img src="" className="about-image img-fluid" alt="" />
                        </div>

                    </div>
                </div>
            </section>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="#">Scanfcode</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}
export default Home