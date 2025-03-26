import Facebook from "../../assets/icons/Facebook";
import Location from "../../assets/icons/Location";
import Time from "../../assets/icons/Time";
import Transport from "../../assets/icons/Transport";
import "./style.scss";

const socialLinks = [
  { href: "https://www.facebook.com", icon: <Facebook />, alt: "Facebook" },
  { href: "https://www.linkedin.com", icon: "/LinkedIn.png", alt: "LinkedIn" },
  { href: "https://www.instagram.com", icon: "/Insta.png", alt: "Instagram" },
  { href: "https://twitter.com", icon: "/Twitter.png", alt: "Twitter" },
  { href: "https://www.youtube.com", icon: "/Youtube.png", alt: "YouTube" },
  { href: "https://www.quora.com", icon: "/Quora.png", alt: "Quora" },
];

const officeDetails = [
  {
    icon: <Location />,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
  },
  {
    icon: <Time />,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    icon: <Time />,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  { icon: <Transport />, text: "Lorem ipsum asd asdsaaweeq Lorem Ipsum" },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Contact us</h3>
            <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
            <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
            <p>Phone no: 123456789</p>
          </div>
          <div className="footer-section social">
            <h3>Follow us</h3>
            <div className="social-icons">
              {socialLinks.map(({ href, icon, alt }) => (
                <a key={href} href={href} rel="noreferrer" target="_blank">
                  {typeof icon === "string" ? (
                    <img src={icon} alt={`${alt} Icon`} />
                  ) : (
                    icon
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3>Head Office</h3>
            {officeDetails.map(({ icon, text }, index) => (
              <p key={index}>
                {icon} {text}
              </p>
            ))}
          </div>
        </div>
      </footer>

      <div className="copy-right-ribbon">
        <p>
          © 2021 All Rights Reserved. <span>Privacy Policy</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
