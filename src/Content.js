import React from "react";
import bannerImg from "./bannerImg.svg";
export default function Content() {
  return (
    <section className="content-container d-flex">
      <div className="content-text">
        <h1 className="banner-text">We take care Marketing things</h1>{" "}
        <button className="plan-btn">Pick a Plan</button>{" "}
      </div>
      <div className="banner-img ">
        <img src={bannerImg} alt={""} />
        <div className="inclinedline"></div>
      </div>
    </section>
  );
}
