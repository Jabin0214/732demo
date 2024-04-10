import React, { useState } from 'react';
import { dark_mode, light_mode } from '../assets/icons';


const FeatureIntro = (props) => {
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/200');
  const handleClickChangePicture = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const newImageUrl = `https://picsum.photos/${randomNumber}`;
    setImageUrl(newImageUrl);
  };


  return (
    <div className='px-10 py-20 max-h-screen overflow-y-auto flex flex-wrap justify-center gap-5 '>
      <div>
        <h1 className='text-[80px] max-md:text-[30px] font-bungee break-words px-10'>
          Features</h1>
      </div>

      <div className='card'>
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Case1: Random Picture
        </h3>
        <img src={imageUrl} alt="Disconnected" className='w-[282px] h-auto rounded-[20px]' />
      </div>

      <div className='card'>
        <button
          className="text-2xl font-bold px-6 py-3 text-white rounded-lg focus:outline-none bg-gradient-to-b from-black to-black hover:from-red-400 hover:to-orange-400"
          onClick={handleClickChangePicture}>
          Change Picture
        </button>
        <h3 className='mt-5 font-montserrat text-2xl leading-normal font-bold'>
          className=
        </h3>
        <p className='py-4 text-xl font-montserrat '>
          text-2xl font-bold px-6 py-3 text-white rounded-lg
          <br />
          <br />
          bg-gradient-to-b hover:from-red-400 hover:to-orange-400 from-black to-black
        </p>
      </div>

      <div className="card">
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Case2: Mode Switch
        </h3>
        <button
          className="text-2xl font-bold px-6 py-3 text-white rounded-lg focus:outline-none bg-gradient-to-b from-black to-black hover:from-red-400 hover:to-orange-400"
          onClick={() => { props.handleThemeSwitchFunction() }}
        >
          Toggle Dark Mode
        </button>

        <button className='px-6 py-3 ' onClick={() => { props.handleThemeSwitchFunction() }}>
          <img src={dark_mode} alt="Icon" className="w-10 dark:hidden" />
          <img src={light_mode} alt="Icon" className="w-10 hidden dark:block" />
          <p className="w-10 dark:hidden">DarkMode</p>
          <p className="w-10 hidden dark:block">LightMode</p>
        </button>
      </div>

      <div className='card'>
        <h3 className='mt-5 font-montserrat text-2xl leading-normal font-bold'>
          onClick= {'{'} some function {'}'}
          <br />
          className=
        </h3>
        <p className='py-4 text-xl font-montserrat '>
          dark: (what you want to change in dark mode)
        </p>
      </div>

    </div>
  );
};

export default FeatureIntro;

