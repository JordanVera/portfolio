import React from 'react';
import HeaderAnimation from './HeaderAnimation.js';

export default function Jumbotron() {
  return (
    <div id="jumbotron">
      <div className="imageContainer">
        <img
          className="jumbotronImage image1"
          src="/media/cactus.jpg"
          alt="nature background"
        />
        <img
          className="jumbotronImage image2"
          src="/media/cactusMobile.jpg"
          alt="for mobile"
        />
      </div>
      <div id="jumbotronAnimation">
        <HeaderAnimation />
      </div>
    </div>
  );
}
