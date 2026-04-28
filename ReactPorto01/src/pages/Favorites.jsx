import React from 'react';
import useFavoriteStore from '../store/useFavoriteStore';
import MealCard from '../components/Meal/MealCard';

const Favorites = () => {
  const { favorites } = useFavoriteStore();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent mb-2">
        My Favorites
      </h1>
      <p className="text-slate-500 mb-8">Your carefully curated list of delicious recipes.</p>

      {favorites.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-100">
           <p className="text-slate-500 text-lg">You haven't added any favorite recipes yet.</p>
           <p className="text-slate-400 mt-2">Go to the Home page and click the heart icon on a meal!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
