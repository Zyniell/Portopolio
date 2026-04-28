import { useQuery } from '@tanstack/react-query';
import mealApi from '../api/mealApi';

export const useSearchMeals = (query = 'a') => {
  return useQuery({
    queryKey: ['meals', 'search', query],
    queryFn: async () => {
      const response = await mealApi.get(`search.php?s=${query}`);
      return response.data.meals || [];
    },
    enabled: !!query,
  });
};

export const useMealDetail = (id) => {
  return useQuery({
    queryKey: ['meals', 'detail', id],
    queryFn: async () => {
      const response = await mealApi.get(`lookup.php?i=${id}`);
      return response.data.meals ? response.data.meals[0] : null;
    },
    enabled: !!id,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await mealApi.get('categories.php');
      return response.data.categories || [];
    },
  });
};
