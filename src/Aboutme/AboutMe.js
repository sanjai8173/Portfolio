import React from 'react';
import './Aboutme.css';
import dp from './dp.png';
import block from './block.jpg';
import obj from './obj.png'

function AboutMe() {
    return (
        <div>
            <div className="container">
                <div className="about">
                    <h1>SANJAI GANDHI</h1>
                    <h3>Passionate MERN Stack Developer</h3>
                </div>
                <div className="image-container">
                    <img src={dp} alt="Sanjai Gandhi" />
                </div>
            </div>
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="image-container">
                    <img src={obj} alt="Objective" style={{ width: '600px', marginLeft: '50px' }} />
                </div>
                <div className="about">
                    <h1>Objective</h1>
                    <p>To seek an entry level position to start my career as a fresher in a high level professional environment.</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '200px' }}>
                <div className="about">
                    <h1>DApp's</h1>
                    <p>I craft DApps using the MERN stack, summoning decentralized magic with React, Node.js, and blockchain, to reshape the digital realm.</p>
                </div>
                <div className="image-container">
                    <img src={block} alt="blockchain" style={{ width: '600px', marginLeft: '50px' }} />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
