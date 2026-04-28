import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMealDetail } from '../hooks/useMeals';
import { ArrowLeft, PlayCircle, Heart } from 'lucide-react';
import useFavoriteStore from '../store/useFavoriteStore';
import { cn } from '../utils/cn';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: meal, isLoading, isError } = useMealDetail(id);
  const { toggleFavorite, isFavorite } = useFavoriteStore();

  if (isLoading) return <div className="container py-12 text-center">Loading recipe details...</div>;
  if (isError || !meal) return <div className="container py-12 text-center text-red-500">Recipe not found.</div>;

  const isFav = isFavorite(meal.idMeal);
  
  // Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== "") {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`]
      });
    }
  }

  const handleToggleFav = () => {
    toggleFavorite({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strCategory: meal.strCategory,
      strArea: meal.strArea,
    });
  };

  return (
    <div className="container py-8 max-w-5xl">
      <button onClick={() => navigate(-1)} className="flex items-center text-orange-600 hover:text-orange-700 font-medium mb-6 transition-colors">
        <ArrowLeft size={20} className="mr-1" /> Back
      </button>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
        <div className="relative h-64 md:h-96">
          <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
             <div>
               <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{meal.strMeal}</h1>
               <div className="flex gap-3 text-white/90">
                 <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-medium">{meal.strCategory}</span>
                 <span className="bg-slate-700/50 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">{meal.strArea}</span>
               </div>
             </div>
             <button 
                onClick={handleToggleFav}
                className="bg-white/20 backdrop-blur hover:bg-white/30 p-4 rounded-full transition-colors hidden md:block"
             >
                <Heart size={28} className={cn(isFav ? "fill-red-500 text-red-500" : "text-white")} />
             </button>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Instructions</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                {meal.strInstructions}
              </div>
            </section>
            
            {meal.strYoutube && (
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                   <PlayCircle className="text-red-600" /> Video Tutorial
                </h2>
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-100">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
             <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="text-xl font-bold text-orange-900 mb-4">Ingredients</h3>
                <ul className="space-y-3">
                  {ingredients.map((item, idx) => (
                    <li key={idx} className="flex justify-between border-b border-orange-200/50 pb-2">
                      <span className="text-slate-700 font-medium">{item.ingredient}</span>
                      <span className="text-slate-500 text-sm">{item.measure}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
