import React from 'react';

const CareerAchievements = () => {
  const achievements = [
    {
      title: "深耕迪拜七年",
      description: "政府开发商中国市场顾问",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-rx7tvaq4fld8amrdehcbankmtwwd3l.png"
    },
    {
      title: "时尚产业",
      description: "创立女装品牌 YCL Fashion",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-2yvhnzznsu8pd89rmrzjsr2lyfewnf.png"
    },
    {
      title: "广告咨询",
      description: "2023 年成立北京广告咨询公司",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-mjdf8vmdm0gxt829j5jgusc5kcrtz9.png"
    },
    {
      title: "餐饮投资",
      description: "迪拜高端中餐馆 \"唐镇\" 合伙人",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-n91gpa6aosadscaruqjpiom8f64jqo.png"
    },
    {
      title: "国际传播角色",
      description: "\"中东市场观察者\" 与 \"文化桥梁\" 双重身份",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250620135430-axftmpp4k7yh6k2pa80xdh2b34xu9c.jpg"
    }
  ];

  return (
    <div className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">职业成就与商业布局</h2>
            <p className="text-gray-600">Career Achievements and Business Layout</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-full z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAchievements;
