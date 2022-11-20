import React from "react";
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('/src/assets/splash.jpeg')] bg-cover bg-blend-overlay items-center w-full h-screen ">
      <div className="bg-stone-500 bg-opacity-70 h-full w-full drop-shadow-2xl ">
        <div className="flex flex-col h-screen justify-center items-center">
        <img className="mb-2" src={Logo} alt="Vet 4 You" />
        <h3 className="text-2xl mb-2 text-gray-200 font-bold font-mono drop-shadow-xl">
          Fight for those who fought for you
        </h3>
        <p className="text-gray-200 font-bold font-mono mb-8 drop-shadow-xl">
          We aim to fight the homeless veterans crisis through the power over community sponsorship
        </p>

        <button onClick={() => navigate('/login')} className="bg-white font-bold rounded-full py-4 px-8 drop-shadow-xl uppercase tracking-wider hover:bg-stone-700 hover:text-white font-mono">
          Sponsor A Veteran
        </button>
        </div>
      </div>
    </div> 
  );
}

export default Home;
