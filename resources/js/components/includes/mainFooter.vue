<template>
    <div>
        <footer class="footer footer-2 footer-main">
            <div class="icon-boxes-container">
                <div class="container">
                    <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="ui rocket icon large"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Free Shipping</h3>
                            <p>No minimum</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="icon recycle  large"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Free Returns</h3>
                            <p>within 30 days</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="ui exclamation circle large icon"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Get 10% Off 1 Item</h3>
                            <p>When you sign up</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="ui thumbs up large icon"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">We Support</h3>
                            <p>24/7 amazing services</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="bg-image footer-newsletter" style="background-image:url(assets/images/backgrounds/footer-subscribe-bg.png)">
                <div class="container">
                    <div class="heading text-center">
                    <h3 class="title">Get The Latest Deals</h3>
                    <p class="title-desc">and receive <span>$15 off coupon</span> for first shopping </p>
                    </div>
                    <div class="row">
                    <div class="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 subscribeDiv">
                        <form id="subscribeFrm" method="post">
                        <div class="input-group">
                            <input aria-describedby="newsletter-btn" aria-label="Email Adress" class="form-control" name="subsEmail" placeholder="Enter your Email Address" required type="email">
                            <div class="input-group-append">
                            <div class="ui active dimmer inverted subsribeDimmer" style="display:none">
                                <div class="ui loader small text"></div>
                            </div>
                            <button class="btn btn-primary subsribeBtn" id="newsletter-btn" type="submit">
                                <span>Subscribe</span>
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div class="footer-middle">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6 col-sm-12 footer-middle-left">
                        <div class="widget widget-about">
                        <img alt="Footer Logo" class="footer-logo" src="images/logo/logo.png">
                        <p>Rainbowbestdeal is committed to providing the best online shopping with a supperior online service Wide variety of jewelry, Electronics, Laptops, Accessories and much more.</p>
                        <div class="widget-about-info">
                            <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <span class="widget-about-title">Got Question? Call us 24/7</span>
                                <a href="tel:7038696548" class="myTxtPink">703 869 6548</a>
                            </div>
                            <div class="col-sm-6 col-md-8"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="widget">
                        <h4 class="widget-title">Information</h4>
                        <ul class="widget-list">
                            <li>
                            <a href="`+getBaseUrlInp+`aboutus" target="_blank">About Us</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`privacy-policy" target="_blank">Privacy Policy</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`terms-conditions" target="_blank">Terms & Conditions</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`cart">Shopping Cart</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="widget">
                        <h4 class="widget-title">Customer Service</h4>
                        <ul class="widget-list">
                            <li>
                            <a href="`+getBaseUrlInp+`delivery-information" target="_blank">Delivery Information</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`returns-exchange" target="_blank">Return and Exchange</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`sitemap-html" target="_blank">Site Map</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`contact">Contact Us</a>
                            </li>
                            <li>
                            <span>Blog</span>
                            </li>
                            <li>
                            <a href="
                                                        <?php base_url('sitemap-generator'); ?>" style="color:transparent">. </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="widget">
                        <h4 class="widget-title">My Account</h4>
                        <ul class="widget-list">
                            <li>
                            <span>Account Settings</span>
                            </li>
                            <li>
                            <span>Order & Returns</span>
                            </li>
                            <li>
                            <span>Help Center</span>
                            </li>
                            <li>
                            <span>Shipping Information</span>
                            </li>
                            <li>
                            <span>My Reviews</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="footer-bottom">
                <div class="container">
                    <p class="footer-copyright">Copyright © 2023 Rainbowbestdeal. All Rights Reserved. </p>
                    <ul class="footer-menu">
                    <li>
                        <a href="`+getBaseUrlInp+`terms-conditions" target="_blank">Terms Of Use</a>
                    </li>
                    <li>
                        <a href="`+getBaseUrlInp+`privacy-policy" target="_blank">Privacy Policy</a>
                    </li>
                    </ul>
                    <div class="social-icons social-icons-color">
                    <span class="social-label">Social Media</span>
                    <a href="https://www.facebook.com/rainbowbestdealrbd/" target="_blank" class="social-icon social-facebook" title="Facebook">
                        <i class="icon-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/rainbowbestdeal/" target="_blank" class="social-icon social-twitter" title="Twitter">
                        <i class="icon-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/rainbowbestdeal/" target="_blank" class="social-icon social-instagram" title="Instagram">
                        <i class="icon-instagram"></i>
                    </a>
                    </div>
                </div>
                </div>` const mob_nav = ` <button id="back-to-top" uk-totop uk-scroll></button>
                <div class="mobile-menu-overlay"></div>
                <div class="mobile-menu-container mobile-menu-light">
                <div class="mobile-menu-wrapper">
                    <span class="mobile-menu-close">
                    <i class="icon-close"></i>
                    </span>
                    <form action="search?" class="mobile-search">
                    <label class="sr-only" for="mobile-search">Search</label>
                    <input class="form-control" id="" name="keyword" placeholder="Search product ..." required type="search">
                    <button class="btn btn-primary" style="background-color:#e03997;border-color:#e03997" type="submit">
                        <i class="icon-search"></i>
                    </button>
                    </form>
                    <ul class="myMobileHeaderTwoMenu nav nav-border-anim nav-pills-mobile" role="tablist">
                    <li class="nav-item">
                        <a href="#mobile-menu-tab" class="active nav-link" aria-controls="mobile-menu-tab" aria-selected="true" data-toggle="tab" id="mobile-menu-link" role="tab">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a href="#mobile-cats-tab" class="nav-link" aria-controls="mobile-cats-tab" aria-selected="false" data-toggle="tab" id="mobile-cats-link" role="tab">Account</a>
                    </li>
                    </ul>
                    <div class="tab-content">
                    <div class="active fade show tab-pane" aria-labelledby="mobile-menu-link" id="mobile-menu-tab" role="tabpanel">
                        <nav class="mobile-nav">
                        <ul class="mobile-menu">
                            <li class="active">
                                <router-link to="home-garden-tools">
                                    <a >HOME, GARDEN & TOOLS</a>
                                </router-link>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`outdoor">OUTDOOR</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`beauty-health" class="sf-with-ul">BEAUTY & HEALTH</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`electronics">ELECTRONICS</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`automotive">AUTOMOTIVE</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`industrial">INDUSTRIAL</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`clothing-shoes-jewelry">CLOTHING, SHOES & JEWELRY</a>
                            </li>
                            <li>
                            <a href="`+getBaseUrlInp+`categories">ALL</a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    <div class="fade tab-pane" aria-labelledby="mobile-cats-link" id="mobile-cats-tab" role="tabpanel">
                        <nav class="mobile-cats-nav">
                        <ul class="mobile-cats-menu" id="headerAccountSpanMobile">
                            <li>
                            <a href="`+getBaseUrlInp+`account">My Account</a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                    <div class="social-icons">
                    <a href="https://www.facebook.com/rainbowbestdealrbd/" class="social-icon" target="_blank" title="Facebook">
                        <i class="icon-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/rainbowbestdeal/" class="social-icon" target="_blank" title="Twitter">
                        <i class="icon-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/rainbowbestdeal/" class="social-icon" target="_blank" title="Instagram">
                        <i class="icon-instagram"></i>
                    </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>