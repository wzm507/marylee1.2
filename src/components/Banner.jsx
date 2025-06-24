import React from 'react';

const Banner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[600px] relative overflow-hidden">
      <img 
        src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250619155811-w036o5lcln8mf0reua046q0df3w4l4.jpg" 
        alt="Banner" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">MARY LEE</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center">
          中东市场观察者 · 文化桥梁 · 跨界创业者
        </p>
      </div>
    </div>
  );
};

export default Banner;
