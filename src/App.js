
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./component/Home"
import Contactus from './component/Contactus';
import Aboutus from './component/Aboutus';
import Ourproducts from './component/Ourproducts';
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div className='w-full h-full'>
    <div className='flex h-screen justify-center flex-col gap-8 place-items-center'>
      <h1 className='text-3xl'>404. Page not found !!</h1>
      <Link to="/" > 
      <button className="bg-green-400 w-full  md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] rounded-md font-inherit font-bold hover:bg-red-400 transition-all duration-200">
              <a href="/aboutus" className="text-xl">
                Home Page
              </a>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-[14px] h-[14px] ml-2 my-1"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
            </button> </Link>
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
