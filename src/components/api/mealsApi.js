const mealsApiURL = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';

export const mealsApi = {
    getMeals: async () => {
      const response = await fetch(mealsApiURL);

      const data = await response.json();
      return data;
    }
}