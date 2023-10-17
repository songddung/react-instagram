import logo from './logo.svg';
import './App.css';
import Left from './left';
import Middle from './Middle';
import Footer from './Footer';
import Reaction from './Reaction'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reaction2 from './Reaction2';
import Reaction3 from './Reaction3';

function Router() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/반응' element={<Reaction/>}></Route>
      <Route path='/사진 및 동영상' element={<Reaction2/>}></Route>
      <Route path='/계정내역' element={<Reaction3/>}></Route>
      </Routes>
      </BrowserRouter>
  
  );
}

export default Router;
