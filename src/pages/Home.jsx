import ButtonAppBar from '../Components/AppBar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';
import Projects from '../Components/Projects/Projects.jsx';
import Footer from '../Components/Footer.jsx';
import Resume from '../Components/Resume.jsx';
import OpenAiForm from '../Components/OpenAiForm.jsx';
import { ToastContainer } from 'react-toastify';
import MovieDice from '../Components/MovieDice/Dice';
import AboutMe from '../Components/AboutMe.jsx';
import ContactMe from '../Components/Contact/ContactMe.jsx';
import ResumeFull from '../Components/ResumeFull/Resume.jsx';

export default function Home() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Jumbotron />
      <Resume />
      <Projects />
      <OpenAiForm />
      <AboutMe />
      <ResumeFull />
      <ContactMe />
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
