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
            <section class="shop-section section-padding" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <small class="section-small-title">Moso Design Shop</small>

                            <h2 class="mt-2 mb-4"><span class="tooplate-red">Interior</span> Products</h2>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="shop-thumb">
                                <div class="shop-image-wrap">
                                    <a href="shop-detail.html">
                                        <img src="https://cdn.leonardo.ai/users/cc91876d-418b-4856-82a3-b277d5cda999/generations/e612150b-43ae-4ea4-9522-4c6cae2b661a/Leonardo_Diffusion_The_picture_showcases_the_versatility_and_p_0.jpg?w=512" className="shop-image img-fluid" alt="" />
                                    </a>

                                    <div class="shop-icons-wrap">
                                        <div class="shop-icons d-flex flex-column align-items-center">
                                            <a href="#" class="shop-icon bi-heart"></a>

                                            <a href="#" class="shop-icon bi-bookmark"></a>
                                        </div>

                                        <p class="shop-pricing mb-0 mt-3">
                                            <span class="badge custom-badge">$3,600</span>
                                        </p>
                                    </div>

                                    <div class="shop-btn-wrap">
                                        <a href="shop-detail.html" class="shop-btn custom-btn btn d-flex align-items-center align-items-center">Learn more</a>
                                    </div>
                                </div>

                                <div class="shop-body">
                                    <h4>Bathroom</h4>
                                </div>
                            </div>
                        </div>

                        {/* <div class="col-lg-6 col-12">
                            <div class="shop-thumb">
                                <div class="shop-image-wrap">
                                    <a href="shop-detail.html">
                                        <img src="images/shop/mock-up-poster-modern-dining-room-interior-design-with-white-empty-wall.jpg" class="shop-image img-fluid" alt="" />
                                    </a>

                                    <div class="shop-icons-wrap">
                                        <div class="shop-icons d-flex flex-column align-items-center">
                                            <a href="#" class="shop-icon bi-heart"></a>

                                            <a href="#" class="shop-icon bi-bookmark"></a>
                                        </div>

                                        <p class="shop-pricing mb-0 mt-3">
                                            <span class="badge custom-badge">$6,400</span>
                                        </p>
                                    </div>

                                    <div class="shop-btn-wrap">
                                        <a href="shop-detail.html" class="shop-btn custom-btn btn d-flex align-items-center align-items-center">Learn more</a>
                                    </div>
                                </div>

                                <div class="shop-body">
                                    <h4>Dining</h4>
                                </div>
                            </div>
                        </div> */}

                        {/* <div class="col-lg-4 col-12">
                            <div class="shop-thumb">
                                <div class="shop-image-wrap">
                                    <a href="shop-detail.html">
                                        <img src="images/shop/green-sofa-white-living-room-with-blank-table-mockup.jpg" class="shop-image img-fluid" alt="" />
                                    </a>

                                    <div class="shop-icons-wrap">
                                        <div class="shop-icons d-flex flex-column align-items-center">
                                            <a href="#" class="shop-icon bi-heart"></a>

                                            <a href="#" class="shop-icon bi-bookmark"></a>
                                        </div>

                                        <p class="shop-pricing mb-0 mt-3">
                                            <span class="badge custom-badge">$2,400</span>
                                        </p>
                                    </div>

                                    <div class="shop-btn-wrap">
                                        <a href="shop-detail.html" class="shop-btn custom-btn btn d-flex align-items-center align-items-center">Learn more</a>
                                    </div>
                                </div>

                                <div class="shop-body">
                                    <h4>Living Room</h4>
                                </div>
                            </div>
                        </div> */}

                        {/* <div class="col-lg-4 col-12">
                            <div class="shop-thumb">
                                <div class="shop-image-wrap">
                                    <a href="shop-detail.html">
                                        <img src="images/shop/concept-home-cooking-with-female-chef.jpg" class="shop-image img-fluid" alt="" />
                                    </a>

                                    <div class="shop-icons-wrap">
                                        <div class="shop-icons d-flex flex-column align-items-center">
                                            <a href="#" class="shop-icon bi-heart"></a>

                                            <a href="#" class="shop-icon bi-bookmark"></a>
                                        </div>

                                        <p class="shop-pricing mb-0 mt-3">
                                            <span class="badge custom-badge">$3,800</span>
                                        </p>
                                    </div>

                                    <div class="shop-btn-wrap">
                                        <a href="shop-detail.html" class="shop-btn custom-btn btn d-flex align-items-center align-items-center">Learn more</a>
                                    </div>
                                </div>

                                <div class="shop-body">
                                    <h4>Chef Kitchen</h4>
                                </div>
                            </div>
                        </div> */}

                        {/* <div class="col-lg-4 col-12">
                            <div class="shop-thumb">
                                <div class="shop-image-wrap">
                                    <a href="shop-detail.html">
                                        <img src="images/shop/childrens-bed-nursery-cot-velvet-childrens-room.jpg" class="shop-image img-fluid" alt="" />
                                    </a>

                                    <div class="shop-icons-wrap">
                                        <div class="shop-icons d-flex flex-column align-items-center">
                                            <a href="#" class="shop-icon bi-heart"></a>

                                            <a href="#" class="shop-icon bi-bookmark"></a>
                                        </div>

                                        <p class="shop-pricing mb-0 mt-3">
                                            <span class="badge custom-badge">$850</span>
                                        </p>
                                    </div>

                                    <div class="shop-btn-wrap">
                                        <a href="shop-detail.html" class="shop-btn custom-btn btn d-flex align-items-center align-items-center">Learn more</a>
                                    </div>
                                </div>

                                <div class="shop-body">
                                    <h4>Childrens Bedroom</h4>
                                </div>
                            </div>
                        </div> */}
{/* 
                        <div class="col-lg-12 col-12">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>

                                    <li class="page-item active" aria-current="page">
                                        <a class="page-link" href="#">1</a>
                                    </li>
                                    
                                    <li class="page-item">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>

                                    <li class="page-item">
                                        <a class="page-link" href="#">4</a>
                                    </li>

                                    <li class="page-item">
                                        <a class="page-link" href="#">5</a>
                                    </li>
                                    
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}

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