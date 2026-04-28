import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useSearchMeals } from '../hooks/useMeals';
import MealCard from '../components/Meal/MealCard';
import SkeletonCard from '../components/UI/SkeletonCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('a');
  
  const { data: meals, isLoading, isError } = useSearchMeals(query);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setQuery(searchTerm);
    }
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Discover Delicious Meals
          </h1>
          <p className="text-slate-500 mt-1">Find the best recipes for your daily inspiration.</p>
        </div>
        
        <form onSubmit={handleSearch} className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search recipes (e.g. Chicken)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all shadow-sm"
          />
          <Search className="absolute left-3 top-2.5 text-slate-400" size={20} />
          <button type="submit" className="hidden">Search</button>
        </form>
      </div>

      {isError && (
        <div className="text-center py-12 bg-red-50 rounded-2xl border border-red-100">
          <p className="text-red-500 font-medium">Failed to fetch meals. Please try again later.</p>
        </div>
      )}

      {!isError && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : meals && meals.length > 0 ? (
            meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
          ) : (
            <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500">
              No recipes found for "{query}". Try a different ingredient or meal name.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
