// React
import React from "react";

// Import Icons
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

//Import CSS
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="review-container">
        <div className="review-item-container">
          <p className="review-item-name">Alex A.</p>
          <p className="review-item-stars">
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
          </p>
          <p className="review-item-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae aliquet pellentesque eget. Scelerisque eu et mi,
            odio quis nisi, volutpat ut. Nulla varius potenti libero, adipiscing
            lorem viverra massa sit pharetra. Aliquam malesuada vitae dignissim.
          </p>
        </div>
        <div className="review-item-container">
          <p className="review-item-name">Bob W.</p>
          <p className="review-item-stars">
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
          </p>
          <p className="review-item-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae aliquet pellentesque eget. Scelerisque eu et mi,
            odio quis nisi, volutpat ut. Nulla varius potenti libero, adipiscing
            lorem viverra massa sit pharetra. Aliquam malesuada vitae dignissim.
          </p>
        </div>
        <div className="review-item-container">
          <p className="review-item-name">John B.</p>
          <p className="review-item-stars">
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
          </p>
          <p className="review-item-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae aliquet pellentesque eget. Scelerisque eu et mi,
            odio quis nisi, volutpat ut. Nulla varius potenti libero, adipiscing
            lorem viverra massa sit pharetra. Aliquam malesuada vitae dignissim.
          </p>
        </div>
        <div className="review-item-container">
          <p className="review-item-name">Cassandra B.</p>
          <p className="review-item-stars">
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
            <Icon className="review-item-stars-icon" path={mdiStar} />
          </p>
          <p className="review-item-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae aliquet pellentesque eget. Scelerisque eu et mi,
            odio quis nisi, volutpat ut. Nulla varius potenti libero, adipiscing
            lorem viverra massa sit pharetra. Aliquam malesuada vitae dignissim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
