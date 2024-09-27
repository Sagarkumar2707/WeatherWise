// services/weatherApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WEATHER_KEY } from '../../../config/env';



export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({

    // Fetch weather by latitude and longitude
    getWeatherByCoordinates: builder.query({
      query: ({ lat, lon }) =>
        `weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`,
    }),
    
    // Fetch weather by city name
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&appid=${WEATHER_KEY}&units=metric`,
    }),
  }),
});

// Export hooks for functional components
export const { useGetWeatherByCoordinatesQuery, useGetWeatherByCityQuery } = weatherApi;
