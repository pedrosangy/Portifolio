import React from 'react';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fas fa-code"></i>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh, tincidunt sit amet sapien quis.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div>
            <i className="fas fa-crop-alt"></i>
            <h2>UI/UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh, tincidunt sit amet sapien quis.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div>
            <i className="fab fa-app-store"></i>
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh, tincidunt sit amet sapien quis.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
// Compare this snippet from portfolio2/portfolio/src/components/Portfolio.js: