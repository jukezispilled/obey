import React from 'react';
import logo from './logo.svg';
import './App.css';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";

function App() {
  return (
    <div
      className="relative h-screen w-screen flex justify-center"
      style={{ backgroundImage: "url('/b.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute top-5 left-5 md:top-7 md:left-7 flex flex-col items-center z-30">
        <div className="flex flex-row">
          <a href="https://x.com/obeymemewtf" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={Xlogo} alt="Xlogo" className="w-14 h-14 rounded-md" />
          </a>
          <a href="https://t.me/OBEYportalsolana" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={TG} alt="Tg logo" className="w-14 h-14" />
          </a>
        </div>
      </div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-30"
        src="/vid1.mp4"
        autoPlay
        loop
        muted
      />
      <img src="dog.png" className="absolute bottom-0 w-[95%] md:w-[65%] z-20" alt="dog" />
      <div className='text-8xl md:text-[150px] text-center text-white font-custom z-30 mt-[35%] md:mt-[7.5%]'>
        <div className=''>
          Obey
        </div>
        <div className='text-sm md:text-xl font-custom1'>
          CA: updating...
        </div>
      </div>
    </div>
  );
}

export default App;