import React from 'react';
import PropertyCard from '@/components/PropertyCard';

const MaryProjects = () => {
  // 生成16个Mary项目的卡片数据
  const maryProjects = Array.from({ length: 16 }, (_, i) => {
    const baseProject = {
      id: i + 1,
      address: "迪拜精选地段",
      status: i % 3 === 0 ? "热销中" : "限量发售",
    };

    // 第一个项目特殊处理
    if (i === 0) {
      return {
        ...baseProject,
        title: "Damac Lagoons",
        price: "$1,851,403.36",
        beds: 6,
        baths: 7,
        sqft: 4784.88,
        image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-k6lngt3653ttwdjg0972mds1vrky27.png"
      };
    }

    // 第二个项目特殊处理
    if (i === 1) {
      return {
        ...baseProject,
        title: "Business Bay",
        price: "$667,053.17",
        beds: 2,
        baths: 2,
        sqft: 1330.74,
        image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-q671vf1glaadqju63jfk6ippqddfoc.png"
      };
    }

    // 第三到第六个项目替换为精选房产项目
    if (i >= 2 && i <= 5) {
      const featuredProperties = [
        {
          title: "迪拜山庄园",
          price: "$43,561,121.60",
          beds: 12,
          baths: 10,
          sqft: 40000,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-5ts5ygh85tc27mj8rkxy5vr6uzsoke.png"
        },
        {
          title: "JumeirahLakeTowers",
          price: "$10,890,652",
          beds: 5,
          baths: 7,
          sqft: 11432.35,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-uzec3xmj5so283yv44iy7b19vbtafs.png"
        },
        {
          title: "BluewatersIsland",
          price: "$1,497,617",
          beds: 1,
          baths: 1,
          sqft: 1118.59,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-tylq8x5l4vp7s43tw8nxcmj30nixvb.png"
        },
        {
          title: "CityWalk",
          price: "$217,813.28",
          beds: 1,
          baths: 1,
          sqft: 253.71,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-1kzqmc1ig6wvcxydhf747d1oezpwbf.png"
        }
      ];
      return {
        ...baseProject,
        ...featuredProperties[i - 2]
      };
    }

    // 其他项目保持原样
    return {
      ...baseProject,
      title: `Mary精选项目 ${i + 1}`,
      price: `$${(Math.floor(Math.random() * 10) + 3)}00,000`,
      beds: Math.floor(Math.random() * 5) + 2,
      baths: Math.floor(Math.random() * 4) + 1,
      sqft: Math.floor(Math.random() * 2000) + 1000,
      image: `https://nocode.meituan.com/photo/search?keyword=${encodeURIComponent(['豪华别墅', '海景公寓', '城市豪宅', '度假别墅', '顶层公寓', '花园洋房', '湖景别墅', '现代公寓'][i % 8])}&width=400&height=300`
    };
  });

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto" id="mary-projects">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-2">Mary精选项目</h2>
          <p className="text-gray-600">独家高端房产投资机会</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {maryProjects.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default MaryProjects;
