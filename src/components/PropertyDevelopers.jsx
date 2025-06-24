import React from 'react';

const PropertyDevelopers = () => {
  const developers = [
    {
      title: "迪拜海滨别墅",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-sehz9xk1rpj9ia4kkwep2lgoyhjn1x.png",
      developerName: "aldar地产"
    },
    {
      title: "棕榈岛豪华公寓",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-bav5akyu04r4upzspsb1594zlj2rm0.png",
      developerName: "美拉斯地产"
    },
    {
      title: "市中心顶层公寓",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-gosgawr4u2twzd7fy09k3owen25x1a.png",
      developerName: "达马克地产"
    },
    {
      title: "商业湾办公楼",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-sixd6rg041ur2ffnovtdf8w1jdrgan.png",
      developerName: "伊玛尔地产"
    }
  ];

  return (
    <div className="py-20 bg-gray-50 px-4" id="property-developers">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">开发商房产</h2>
            <p className="text-gray-600">Exclusive Developer Listings</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer hover:text-amber-600 transition">
            <span>查看所有开发商项目</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((property, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{property.title}</h3>
                <p className="text-amber-300 font-medium text-lg">{property.developerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDevelopers;
