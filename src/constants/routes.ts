export type Routes = {[key: string]: keyof ROUTES_PARAMS};

export enum ROUTES {
  HOME = 'Home',
  WEATHER_DETAIL = 'WeatherDetail',
}

export type ROUTES_PARAMS = {
  Home: undefined;
  WeatherDetail: undefined;
};
