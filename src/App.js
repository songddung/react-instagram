import Mainbox from "./Mainbox";
import Center from "./Center";
import Left from "./left";
import Right from "./right";
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Reaction from "./Reaction";
import Reaction2 from './Reaction2';
import Reaction3 from './Reaction3';
import Base from "./Base";
import Reaction4 from "./Reaction4";
import HClogin from "./HClogin";
import HCsignin from "./HCsignin";
import Signin from "./Signin";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>



          
        <Route path='/' element={<HClogin />}></Route>
        <Route path='/회원가입' element={<HCsignin />}></Route>
        <Route path='/메인' element={<Base />}></Route>
        <Route path='/반응' element={<Reaction />}></Route>
        <Route path='/사진 및 동영상' element={<Reaction2 />}></Route>
        <Route path='/계정내역' element={<Reaction3 />}></Route>
        <Route path='/다운로드' element={<Reaction4 />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
