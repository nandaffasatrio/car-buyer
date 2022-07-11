import React from "react";
import "../assets/scss/footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={require("../assets/img/carbuyer.png")} alt="" />
            <div className="footer__brand--location">
              <img src={require("../assets/img/location.png")} alt="" />
              <p>71 Ayer Rajah Crescent, #06-14, Singapore 139951</p>
            </div>
            <div className="footer__brand--location">
              <img src={require("../assets/img/call.png")} alt="" />
              <p>+65 8808 7905</p>
            </div>
            <div className="footer__brand--location">
              <img src={require("../assets/img/email.png")} alt="" />
              <p>hello@carbuyer.com.sg</p>
            </div>
          </div>
          <div className="footer__services">
            <p>
              <span>About</span>
            </p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Carreer</p>
          </div>
          <div className="footer__services">
            <p>
              <span>About</span>
            </p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Carreer</p>
          </div>
          <div className="footer__services">
            <p>
              <span>About</span>
            </p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Carreer</p>
          </div>
          <div className="footer__newsletter">
            <p>Be first to latest news, reviews and content now!</p>
            <div className="footer__newsletter--search">
              <input type="text" placeholder="Enter Your Email" />
              <label htmlFor="/">Subscribe</label>
            </div>
            <div className="footer__newsletter--socmed">
              <p>Follow Us On</p>
              <img src={require("../assets/img/instagram.png")} alt="socmed" />
              <img src={require("../assets/img/facebook.png")} alt="socmed" />
              <img src={require("../assets/img/telegram.png")} alt="socmed" />
              <img src={require("../assets/img/linkedin.png")} alt="socmed" />
              <img src={require("../assets/img/youtube.png")} alt="socmed" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__policy">
            <div className="footer__policy--left">
              <p>Advertising Terms and Conditions</p>
              <p>Platform Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="footer__policy--right">
              <p>© 2022. All rights reserved.</p>
            </div>
          </div>
          <div className="footer__ucars">
            <img src={require("../assets/img/ucars.png")} alt="socmed" />
            <p>CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned by UCARS Pte Ltd</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
