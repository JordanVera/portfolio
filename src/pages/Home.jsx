import ButtonAppBar from '../Components/AppBar.js';
import Jumbotron from '../Components/Jumbotron.js';
import AboutMe from '../Components/AboutMe.js';
import Skills from '../Components/Skills.js';
import Projects from '../Components/Projects.js';
import Footer from '../Components/Footer.js';
import Resume from '../Components/Resume.js';
import { ToastContainer } from 'react-toastify';
import MovieDice from '../Components/MovieDice/Dice';
import ChessRow from '../Components/Chess/ChessRow.jsx';

export default function Home() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Jumbotron />
      <Resume />
      <AboutMe />
      <Skills />
      <Projects />
      <ChessRow />
      <MovieDice />
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}
