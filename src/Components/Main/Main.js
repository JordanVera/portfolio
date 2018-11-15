import React from 'react';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

export default function Main() {
  return (
    <div>
        <Header />
        <Introduction />
        <Projects /> 
        <Footer />
    </div>
  )
}
