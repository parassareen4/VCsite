import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Our Portfolio</h2>
        <p>Here are some of the innovative companies we have partnered with:</p>
        <ul>
          <li>
            <h2>Gong</h2>
            <img src="/images/image copy 7.png" alt="Company A" />
          </li>
          <li>
            <h2>Nimble</h2>
            <img src="/images/image copy 8.png" alt="Company A" />
          </li>
          <li>
            <h2>Outreach</h2>
            <img src="/images/image copy 9.png" alt="Company A" />
          </li>
          <li>
            <h2>Pipedrive</h2>
            <img src="/images/image copy 6.png" alt="Company A" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
