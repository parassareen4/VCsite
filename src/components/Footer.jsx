import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <main className="container">
        <p>&copy; 2024 TheClosersFund. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <a href="#no">(310) 933-6028</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </main>
      <div>
        <a target="_blank" href="/">
          Consumer Markets
        </a>
        <a target="_blank" href="/">
          Financial Services
        </a>
        <a target="_blank" href="/">
          Healthcare & Life Sciences
        </a>
        <a target="_blank" href="/">
          Industrial
        </a>
        <a target="_blank" href="/">
          Technology
        </a>
        <a target="_blank" href="/">
          Specialties
        </a>
      </div>
    </footer>
  );
};

export default Footer;
