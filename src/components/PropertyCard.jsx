import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const PropertyCard = ({ property }) => {
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);

  const handlePhoneButtonClick = () => {
    setIsPhoneDialogOpen(true);
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg group">
      {/* 房产图片 */}
      <img 
        src={property.image} 
        alt={property.title} 
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* 悬停时显示的文本信息 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 flex flex-col justify-center p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="transform translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold mb-1 text-center">{property.title}</h3>
          <p className="text-gray-300 text-xs mb-1 text-center">{property.address}</p>
          <p className="text-base font-bold mb-2 text-center text-amber-400">{property.price}</p>
          
          <div className="flex justify-between w-full max-w-xs mx-auto mb-1">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs">{property.beds} 卧室</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">{property.baths} 浴室</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
              </svg>
              <span className="text-xs">{property.sqft} 平方英尺</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            {property.id <= 6 ? (
              <button 
                onClick={handlePhoneButtonClick}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                立即咨询
              </button>
            ) : (
              <button 
                className="bg-gray-400 cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium"
                disabled
              >
                已售空
              </button>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">联系方式</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-2xl font-bold">971 52 7476335</p>
            <p className="text-gray-500 mt-2">请保存此号码以便随时联系</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyCard;
