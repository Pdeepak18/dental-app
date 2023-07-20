
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./component/Home"
import Contactus from './component/Contactus';
import Aboutus from './component/Aboutus';
import Ourproducts from './component/Ourproducts';


function PageNotFound() {
  return (
    <div className='w-full h-full'>
    <div className='grid h-screen place-items-center'>
      <h2 className='text-3xl'>404. Page not found !!</h2>
    </div>
    </div>
    
  );
}

function App() {
  return (
    <div className="">
     
     <Routes>
          <Route  index path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourproducts" element={<Ourproducts />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<PageNotFound />} />
       </Routes>
       
     

    </div>
  );
}

export default App;
