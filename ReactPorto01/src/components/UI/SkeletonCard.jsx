import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full animate-pulse">
      <div className="w-full h-48 bg-slate-200"></div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
        <div className="flex justify-between items-center mt-auto">
           <div className="h-6 bg-slate-200 rounded w-1/4"></div>
           <div className="h-4 bg-slate-200 rounded w-8"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
