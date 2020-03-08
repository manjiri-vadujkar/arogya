import React, {Component, Fragment} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../common/css/bootstrap.min.css";
import "../common/css/style.css";    
import "../common/css/responsive.css";
import "../common/css/custom.css";
import Logo from "../common/images/logo.png";
import About1 from "../common/images/about1.jpg";
import About2 from "../common/images/about2.jpg";
import About3 from "../common/images/about3.jpg";
import Gallery1 from "../common/images/gallery1.jpg";
import Gallery2 from "../common/images/gallery2.jpg";
import Gallery3 from "../common/images/gallery3.jpg";
import Gallery4 from "../common/images/gallery4.jpg";
import Gallery5 from "../common/images/gallery5.jpg";
import Gallery6 from "../common/images/gallery6.jpg";
import Gallery7 from "../common/images/gallery7.jpg";
import Gallery8 from "../common/images/gallery8.jpg";


class Home extends Component {
    render() {
        return (
            <div>
                <div class="main-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="left-top">
                                    <a class="new-btn-d br-2" href="#"><span>Book Appointment</span></a>
                                    <a class="new-btn-d br-2" href="#"><span>demo@gmail.com</span></a>
                                    
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="wel-nots">
                                    <p>Welcome to Arogya!</p>
                                </div>
                                <div class="right-top">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <header class="top-header">
                    <nav class="navbar header-nav navbar-expand-lg">
                        <div class="container">
                            <a class="navbar-brand" href="index.html"><img src={Logo}/></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbar-wd">
                                <ul class="navbar-nav">
                                    <li><a class="nav-link active" href="#home">Home</a></li>
                                    <li><a class="nav-link" href="#about">About Us</a></li>
                                    <li><a class="nav-link" href="#gallery">Gallery</a></li>
                                    <li><a class="nav-link" href="#contact">Contact</a></li>
                                    <li><a class="nav-link" href="/login">Login</a></li>
                                    <li><a class="nav-link" href="#contact">Profile</a></li>
                                    <li><a class="nav-link" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <div id="about" class="about-box">
                    <div class="about-a1">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="title-box">
                                        <h2>About Us</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="row align-items-center about-main-info">
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <h2> Welcome to Arogya </h2>
                                            <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                                            <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                                            <a href="#" class="new-btn-d br-2">Read More</a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="about-m" id="banner">
                                                        <img src={About1}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="gallery" class="gallery-box">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="title-box">
                                    <h2>Gallery</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="popup-gallery row clearfix">
                            <div class="col-md-3 col-sm-6">
                                <div class="box-gallery">
                                    <img src={Gallery1}></img>
                                    <div class="box-content">	
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="box-gallery">
                                    <img src={Gallery2}></img>
                                    <div class="box-content">
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">					
                                <div class="box-gallery">
                                    <img src={Gallery3}></img>
                                    <div class="box-content">							
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="box-gallery">
                                    <img src={Gallery4}></img>
                                    <div class="box-content">	
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="box-gallery">
                                    <img src={Gallery5}></img>
                                    <div class="box-content">							
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">					
                                <div class="box-gallery">
                                    <img src={Gallery6}></img>
                                    <div class="box-content">
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="box-gallery">
                                    <img src={Gallery7}></img>
                                    <div class="box-content">
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="box-gallery">
                                    <img src={Gallery8}></img>
                                    <div class="box-content">		
                                        <h3 class="title">Lorem ipsum dolor</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="footer-box">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <p class="footer-company-name">All Rights Reserved. &copy; 2020 <a href="/">Arogya</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
                <a href="#" id="scroll-to-top" class="new-btn-d br-2"><i class="fa fa-angle-up"></i></a>
            </div>
        )
    }
}

export default Home;