import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Exercise from './pages/exercise/Exercise';
import Navbar from './components/Navbar';
import About from './pages/about/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/exercise/:id' element={<Exercise />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
