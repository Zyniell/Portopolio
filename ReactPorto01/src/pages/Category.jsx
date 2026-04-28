import React from 'react';
import { useCategories } from '../hooks/useMeals';

const Category = () => {
  const { data: categories, isLoading, isError } = useCategories();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Meal Categories</h1>
      <p className="text-slate-500 mb-8">Browse recipes by category.</p>

      {isError && <p className="text-red-500">Failed to fetch categories.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-48 bg-slate-200 animate-pulse rounded-2xl"></div>
          ))
        ) : (
          categories?.map(cat => (
            <div key={cat.idCategory} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
               <img src={cat.strCategoryThumb} alt={cat.strCategory} loading="lazy" className="w-32 h-32 object-contain mb-4" />
               <h3 className="font-bold text-lg text-slate-800">{cat.strCategory}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
