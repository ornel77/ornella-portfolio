import './App.css';
import { Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

function App() {
  return (
    
      <div>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route exact path='/project-1' element={ <Project1 /> } />
          <Route exact path='/project-2' element={ <Project2 /> } />
          <Route exact path='/project-3' element={ <Project3 /> } />
        </Routes>
        {/* <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact /> */}
      </div>
  );
}

export default App;
