import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("Nanjing");
  const [inputValue, setInputValue] = useState("Nanjing");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = () => {
      setLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=742aa5e9ba6c4463ca5cfd412baa1c52`
      )
        .then((response) => {
          if (!response.ok) throw new Error("请求错误");
          return response.json();
        })
        .then((json) => {
          json.cod === 200 ? setData(json) : setData(null);
        })
        .catch((error) => {
          console.error("请求失败:", error);
          setData(null);
        })
        .finally(() => setLoading(false));
    };

    fetchWeather();
  }, [city]);

  const handleSearch = () => {
    setCity(inputValue);
  };

  const handleCityChange = (e) => {
    setInputValue(e.target.value);
  };

  if (loading) return <div>加载中...</div>;

  if (!data) return <div>无法找到该城市的天气数据</div>;

  return (
    <div>
      <h2>天气查询</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleCityChange}
          placeholder="输入城市名"
        />
        <button onClick={handleSearch}>搜索</button>
      </div>
      <h3>
        {data.name} - {data.sys.country}
      </h3>
      <p>天气：{data.weather[0].main}</p>
      <p>描述：{data.weather[0].description}</p>
      <p>温度：{(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>湿度：{data.main.humidity}%</p>
      <p>风速：{data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
