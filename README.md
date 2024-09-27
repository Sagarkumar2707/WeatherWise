# WeatherWise

This is a weather application built with React Native.The app allows users to fetch weather details for their current location or any city they search for. The data is fetched using the OpenWeather API, and the app utilizes `RTK Query` for efficient data fetching and caching. For images, `FastImage` is used for optimized performance.

## Demo

![](Preview/appDemo.gif)

## Features

- Display current location weather details.
- Search for weather details of any city by name.
- Display weather information including temperature, description, and weather icons.
- Optimized image loading using `FastImage`.
- Efficient API handling using `RTK Query`.
- Smooth UI with `LinearGradient` background.

- **Components**: The app is structured with a reusable `WeatherCard` component to display weather information for both the current location and search results.
- **Hooks**: The app uses the `useEffect` hook to fetch the user's current location using `Geolocation`.
- **RTK Query**: `Redux Toolkit Query (RTK Query)` is used to fetch weather data from the OpenWeather API, handling both city searches and current location weather.
