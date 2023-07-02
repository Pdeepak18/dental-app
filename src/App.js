
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./component/Home"
import Contactus from './component/Contactus';
import Aboutus from './component/Aboutus';
import Ourproducts from './component/Ourproducts';
function App() {
  return (
    <div className="">
     
     <Routes>
          <Route  index path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourproducts" element={<Ourproducts />} />
          <Route path="/contactus" element={<Contactus />} />
       </Routes>
       
     

    </div>
  );
}

export default App;
