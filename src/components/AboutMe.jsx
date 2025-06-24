import React, { useState } from 'react';

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-10">
            <div className="w-12 h-0.5 bg-amber-500 mr-4"></div>
            <h2 className="text-3xl font-extrabold tracking-wider">ABOUT ME</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl">
            李雨辰（英文名：Mary Lee），一位在迪拜市场深耕近十年的跨界创业者与投资人。23 岁时，她以 2500
            迪拉姆的起薪独自闯荡迪拜，从房地产销售基层起步，在完全陌生的环境中（外企职场、俄罗斯经理麾下、巴基斯坦公司背景）开启职业生涯。凭借从底层积累的实战经验与市场洞察，她逐步构建起覆盖房地产投资、品牌运营、广告咨询等领域的商业版图，实现从
            "职场新人" 到 "财富自由" 的阶层跨越，成为中东华人圈中兼具专业深度与多元影响力的代表性人物。
          </p>
        </div>
        
        <div className="md:w-1/2 relative">
          <div 
            className="relative overflow-hidden rounded-lg group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full h-full">
              {/* 原始图片 */}
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-8dbfshiz20yy9ykaa0yv22bmy8q5y3.png" 
                alt="Mary Lee" 
                className={`w-full h-auto rounded-lg shadow-xl transform transition-all duration-500 ${
                  isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                }`}
              />
              
              {/* 悬停时显示的图片 */}
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-9ysv5rq4jx5j5iecb7rhg6yiwxn7zh.png" 
                alt="Mary Lee" 
                className={`absolute top-0 left-0 w-full h-auto rounded-lg shadow-xl transform transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                }`}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
