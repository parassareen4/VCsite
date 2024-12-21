import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="column">
            <ul>
              <li>Sales Training Workshops:<br></br> Industry-tailored sessions covering everything from prospecting to closing.</li>
              <li>One-on-One Coaching:<br></br> Personalized guidance to enhance confidence and effectiveness.</li>
              <li>Entrepreneur Bootcamps: <br></br>Advanced sales strategies for scaling businesses.</li>
              <li>Business Scaling Strategies:<br></br> Growth plans to align sales with revenue goals.</li>
              <li>Team Training:<br></br> Programs to improve sales team collaboration and performance.</li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>Closing Mastery Courses:<br></br> Techniques to boost deal conversions and client retention.</li>
              <li>Sales Process Audits:<br></br> Detailed evaluations with actionable improvement plans.</li>
              <li>Lead Generation Training:<br></br> Methods to identify and qualify high-quality leads.</li>
              <li>Mindset and Motivation Programs:<br></br> Tools to maintain focus, overcome rejection, and drive results.</li>
              <li>Sales Enablement:<br></br> Strategies to improve sales processes and increase revenue.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;