import './App.css';
import { Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Project6 from './components/Project6';

function App() {
  return (
    
      <div>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route exact path='/project-1' element={ <Project1 /> } />
          <Route exact path='/project-2' element={ <Project2 /> } />
          <Route exact path='/project-3' element={ <Project3 /> } />
          <Route exact path='/project-4' element={ <Project4 /> } />
          <Route exact path='/project-5' element={ <Project5 /> } />
          <Route exact path='/project-6' element={ <Project6 /> } />
        </Routes>
      </div>
  );
}

export default App;
