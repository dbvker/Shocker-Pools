import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="newsletter-wrapper">
        <div className="newsletter-content">
          <p>Subscribe to receive our newsletter:</p>
          <form>
            <input placeholder="john@shockerpools.com" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-top-content">
            <div className="footer-top-content-item footer-top-content-right">1</div>
            <div className="footer-top-content-item footer-top-content-middle">2</div>
            <div className="footer-top-content-item footer-top-content-left">3</div>
          </div>
          <div className="footer-bottom-content">
            Copyright © 2021 All Rights Reserved by Shocker Pools.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
