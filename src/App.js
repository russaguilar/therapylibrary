import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Exercise from './pages/exercise/Exercise';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
    <div className='container'>  
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/exercise/:id' element={<Exercise />} />
      </Routes>
    </div>
    <div className='sidebar'>
      <Routes>
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </div>
    </div>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
