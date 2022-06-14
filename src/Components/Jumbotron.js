import React from 'react';
import ParticlesBackground from './Particles.js';
import HeaderAnimation from './HeaderAnimation.js';

export default function Jumbotron() {
  return (
    <div id="jumbotron">
      <div id="particles">
        <ParticlesBackground />
      </div>
      <div id="jumbotronAnimation">
        <HeaderAnimation />
      </div>
    </div>
  );
}
