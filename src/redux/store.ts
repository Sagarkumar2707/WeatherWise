// store.ts

import {configureStore} from '@reduxjs/toolkit';
import {weatherApi} from '../services/integrations/weatherApi/weatherApi';

export const store = configureStore({
  reducer: {
    // Add the weather API reducer to the store
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
