import React from 'react';
import HeaderAnimation from './HeaderAnimation.jsx';

export default function Jumbotron() {
  return (
    <div id="jumbotron">
      <div className="imageContainer">
        <img
          className="jumbotronImage image1"
          src="/media/pattern.png"
          alt="nature background"
        />
      </div>
      <div id="jumbotronAnimation">
        <HeaderAnimation />
      </div>
    </div>
  );
}
