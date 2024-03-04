import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/portfolio' element={<About/>} />
        <Route exact path='/portfolio' element={<Portfolio/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
