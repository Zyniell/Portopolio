import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { cn } from '../../utils/cn';
import useFavoriteStore from '../../store/useFavoriteStore';

const MealCard = ({ meal }) => {
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const isFav = isFavorite(meal.idMeal);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strCategory: meal.strCategory,
      strArea: meal.strArea,
    });
  };

  return (
    <Link to={`/recipe/${meal.idMeal}`} className="group h-full block">
      <div className="bg-white hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full relative group-hover:-translate-y-1">

        {/* Image Box */}
        <div className="relative overflow-hidden w-full h-48">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Box */}
        <div className="p-5 flex flex-col flex-grow relative z-10 bg-white">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="text-lg font-bold text-slate-800 line-clamp-2 leading-tight">
              {meal.strMeal}
            </h3>
            <button
              onClick={handleFavoriteClick}
              className="p-2 rounded-full bg-slate-50 hover:bg-orange-100 transition-colors flex-shrink-0"
              aria-label={isFav ? "Remove from favorite" : "Add to favorite"}
            >
              <Heart
                size={20}
                className={cn("transition-colors duration-300", isFav ? "fill-red-500 text-red-500" : "text-slate-400")}
              />
            </button>
          </div>

          <div className="mt-auto flex items-center gap-2 text-xs font-semibold">
            {meal.strCategory && (
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">
                {meal.strCategory}
              </span>
            )}
            {meal.strArea && (
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
                {meal.strArea}
              </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
};

export default MealCard;
