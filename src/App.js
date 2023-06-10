
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./component/Home"
import Contactus from './component/Contactus';
function App() {
  return (
    <div className="">
     
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
       </Routes>
     

    </div>
  );
}

export default App;
