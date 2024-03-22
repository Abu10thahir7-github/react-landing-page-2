import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
function Contact() {
  return (
    <section id="contact">
    <div className="contact">
      <div className="container mb-5">
        <div className="col-md-8 contact-form">
          <div className="row">
            <div className="contact-title">
              <h2>GET IN TOUCH</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form name="sentMassage">
              <div className="row">
                <div className="col-md-6 my-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 my-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Email"
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={4}
                    placeholder="Message"
                  ></textarea>
                </div>
                <button>SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3 contact-info">
          <div className="contact-item">
            <h3>Contact info</h3>
            <p>
              <span>
                <LocationOnIcon className="icons" />
                Address
              </span>{" "}
              4321 California St, San Francisco, CA 12345
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <PhoneIcon className="icons" />
                Phone
              </span>
              +1 123 456 789
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <EmailIcon className="icons" />
                Email
              </span>
              abu10thahir7@gmail.com
            </p>
          </div>
        </div>

      </div>
        <div className="social">
          <div className="social-icon d-flex">
          
               <ul>
                <li> <FacebookIcon /></li>
                <li> <TwitterIcon /></li>
                <li> <YouTubeIcon /></li>
               </ul>
              
    
              
          </div>
        </div>
    </div>
    </section>
  );
}

export default Contact;
