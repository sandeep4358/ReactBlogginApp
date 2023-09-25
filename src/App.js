import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Base from './pages/Base';
import About from './pages/about';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='Home' element={<Home></Home>}/>
          <Route path='Signup' element={<Signup></Signup>}/>
          <Route path='Login' element={<Login></Login>}/>
          <Route path='About' element={<About></About>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
