import ButtonAppBar from './Components/AppBar.js';
import Jumbotron from './Components/Jumbotron.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AboutMe from './Components/AboutMe.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Footer from './Components/Footer.js';
import Resume from './Components/Resume.js';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <ButtonAppBar />
        <Jumbotron />
        <Resume />
        <AboutMe />
        <Skills />
        <Projects />
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
    </ThemeProvider>
  );
}

export default App;
