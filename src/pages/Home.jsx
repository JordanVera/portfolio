import ButtonAppBar from '../Components/AppBar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';
import Projects from '../Components/Projects.jsx';
import Footer from '../Components/Footer.jsx';
import Resume from '../Components/Resume.jsx';
import { ToastContainer } from 'react-toastify';
import MovieDice from '../Components/MovieDice/Dice';
import AboutMe from '../Components/AboutMe.jsx';

export default function Home() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Jumbotron />
      <Resume />
      <Projects />
      <AboutMe />
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
