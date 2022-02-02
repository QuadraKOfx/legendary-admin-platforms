import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {Link} from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {

    return (
        <footer>

            <div className="relative bg-primary">
                {/* SOCIAL MEDIA SECTION */}
                <div className="row pad-1">
                    <div className="col-lg-6 center">
                        <span>Get connected with us on social networks</span>
                    </div>

                    <div className="col-lg-6 left">
                        <div>
                            <Link to="/" className="mrl-2">
                                {/*<i className="fab fa-facebook-f"></i>*/}
                                <TwitterIcon/>
                            </Link>
                            <Link to="/" className="mrl-2">
                                <InstagramIcon/>
                                {/*<i className="fab fa-twitter"></i>*/}
                            </Link>
                            <a href="https://www.linkedin.com/in/marios-constantinou-aa6799100/"
                               className="mrl-2" target="_blank" rel="noreferrer"><LinkedInIcon/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-secondary">
                {/* FOOTER SECTION */}
                <div className="row pad-1">
                    <div className="col-lg-4 left ml-5">
                        <h5 className="mb-2">USEFUL LINKS</h5>
                        <p className="mt-2"><a className="text-reset">Services & Pricing</a></p>
                        <p className="mt-1"><a className="text-reset">Contact us</a></p>
                        <p className="mt-1"><Link to="/register" className="text-reset">Register</Link></p>
                        <p className="mt-1"><a className="text-reset">Help</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
