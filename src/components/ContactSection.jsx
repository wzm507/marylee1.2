import React from 'react';

const ContactSection = () => {
  // 显示电话号码弹窗
  const showPhoneNumber = () => {
    alert('联系电话: 971 52 7476335');
  };

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">立即联系 Mary</h2>
          <p className="text-gray-600 mb-8">
            解锁定制投资方案，最大化您的回报。无论您是寻找迪拜房产投资机会，还是希望拓展中东市场，Mary 都能为您提供专业建议。
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">寻找优质交易</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">友好接待与快速支持</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">列出您的房产</span>
            </div>
          </div>
          
          <button 
            onClick={showPhoneNumber}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium flex items-center transition"
          >
            了解更多
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="md:w-1/2">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img 
              src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-v0ngqfkoyzaf35xm6t7i2z2iftvc55.png" 
              alt="Mary Lee 商务形象" 
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-20 bg-amber-50 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold mb-2">需要帮助？与我们的专家交流。</h3>
          <p className="text-gray-600">与我们的专家交流或浏览更多房产信息。</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-0">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium flex items-center transition">
            联系我们
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className="flex items-center bg-white px-6 py-3 rounded-lg font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>971 52 7476335</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
