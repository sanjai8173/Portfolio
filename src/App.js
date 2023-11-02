import './App.css';
import Nav from './Nav/Nav';
import Mywork from './Mywork/Mywork';
import AboutMe from './Aboutme/AboutMe';
import Contactme from './Contactme/Contactme';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contact-me" element={<Contactme />} />
        <Route path="/my-work" element={<Mywork />} />
      </Routes>
    </div>
  );
}

export default App;
