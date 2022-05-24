const getWeather = async (query) => {
  console.log(process.env.REACT_APP_KEY);
  const api = {
    key: process.env.NEXT_PUBLIC_KEY,
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
