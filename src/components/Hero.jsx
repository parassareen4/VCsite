import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Empowering Your Vision with Strategic Investments</h1>
        <p>Partner with us to scale your business to new heights.</p>
        <button onClick={() => window.location.href = "#contact"}>Get in touch</button>
      </div>
    </section>
  );
};

export default Hero;
