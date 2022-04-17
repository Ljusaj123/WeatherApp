const getWeather = async (query) => {
  const api = {
    key: "f624f11948d4be576b2ea253b7db39b4",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const call = await fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  );

  if (call.status === 404) {
    const message = `${query} has not found`;
    throw new Error(message);
  } 
    const result = await call.json();
    return result;
  
};

export default getWeather;
