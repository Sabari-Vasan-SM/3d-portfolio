import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { contactData } from "../data/contactData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${contactData.email}`} data-cursor="disable">
                {contactData.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${contactData.phone}`} data-cursor="disable">
                {contactData.phone}
              </a>
            </p>
            <h4>Location</h4>
            <p>{contactData.location}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {Object.values(contactData.social).map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                {social.name} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{contactData.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
