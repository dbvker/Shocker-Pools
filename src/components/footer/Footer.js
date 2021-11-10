import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="newsletter-wrapper">
        <div className="newsletter-content">
            <p>Subscribe to receive our newsletter:</p>
            <form>
                <input placeholder='john@shockerpools.com' />
                <button>Subscribe</button>
            </form>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-content">
          2020 Shocker Pools, llc. - All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
