import ButtonAppBar from './Components/AppBar.js';
import Jumbotron from './Components/Jumbotron.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AboutMe from './Components/AboutMe.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Footer from './Components/Footer.js';
import Resume from './Components/Resume.js';

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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
