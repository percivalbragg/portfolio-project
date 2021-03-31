import './App.css';
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProfessionalExperience from './components/ProfessionalExperience';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <ProfessionalExperience />
    </>
  );
}

export default App;
