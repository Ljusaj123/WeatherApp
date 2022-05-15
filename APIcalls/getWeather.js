const getWeather = async (query) => {
  const api = {
    key: "f624f11948d4be576b2ea253b7db39b4",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const call = await fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  );

  if (!call.ok) {
    throw new Error(`${query} has not found`);
  }
  const result = await call.json();
  return result;
};

export default getWeather;
