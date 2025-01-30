import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AppFooter from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Reports from './pages/Reports';
import About from './pages/About';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Navigate to = "/home"/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/reports' element={<Reports/>} />
      </Routes>
      <AppFooter/>
    </div>
  );
}

export default App;
