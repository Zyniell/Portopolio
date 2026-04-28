import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (meal) => {
        const currentFavorites = get().favorites;
        const exists = currentFavorites.some(item => item.idMeal === meal.idMeal);
        if (exists) {
          set({ favorites: currentFavorites.filter(item => item.idMeal !== meal.idMeal) });
        } else {
          set({ favorites: [...currentFavorites, meal] });
        }
      },
      isFavorite: (mealId) => {
        return get().favorites.some(item => item.idMeal === mealId);
      }
    }),
    {
      name: 'meal-favorites',
    }
  )
);

export default useFavoriteStore;
