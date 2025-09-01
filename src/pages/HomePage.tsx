import React from 'react';
import Spline from '@splinetool/react-spline';
import backimge from '../assets/1.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backimge})` }}
      ></div>

      {/* Horizontal light bar in the center */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none">
        <div
          className="w-[50vw] h-[0] bg-white shadow-[0_75px_2000px_70px_rgba(255,255,255,0.5)] rounded-full"
        />
      </div>

      {/* Main content above glow */}
      <div className="relative z-10 w-full h-full">
      <Spline scene="https://prod.spline.design/tmI4Mzfvz4oSDxTY/scene.splinecode" />
    </div>

    </div>
  );
};

export default HomePage;
