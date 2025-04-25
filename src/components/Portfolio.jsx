import React from 'react';
import foto1 from '../assets/images/work-1.png';
import foto2 from '../assets/images/work-2.png';
import foto3 from '../assets/images/work-3.png';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={foto1} alt="Work 1" />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>
                The app connects you to the talented people around the world. Download it from play store.
              </p>
              <a href="https://github.com/pedrosangy" target='blank'><FingerprintIcon fontSize='large'/>   </a>
            </div>
          </div>
          <div className="work">
            <img src={foto2} alt="Work 2" />
            <div className="layer">
              <h3>Music App</h3>
              <p>
                The app connects you to the talented people around the world. Download it from play store.
              </p>
              <a href="https://github.com/pedrosangy" target='blank'><FingerprintIcon fontSize='large'/>   </a>
            </div>
          </div>
          <div className="work">
            <img src={foto3} alt="Work 3" />
            <div className="layer">
              <h3>Online Shopping App</h3>
              <p>
                The app connects you to the talented people around the world. Download it from play store.
              </p>
              <a href="https://github.com/pedrosangy" target='blank'><FingerprintIcon fontSize='large'/>   </a>
            </div>
          </div>
        </div>
        <a href="https://github.com/pedrosangy" target='blank' className="btn">See more</a>
      </div>
    </div>
  );
};

export default Portfolio;
    