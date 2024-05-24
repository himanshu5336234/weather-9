type WeatherData = {
  latitude: number;
  longitude: number;
  current_weather: {
    temperature: number;
    windspeed: number;
  };
  hourly: {
    temperature_2m: number[];
    relative_humidity_2m: number[];
    windspeed_10m: number[];
  };
};
export async function fetchWeatherData({
  latitude,
  longitude,
}: {
  latitude: any;
  longitude: any;
}): Promise<WeatherData> {
  const currentDate = new Date();
  const startDate = currentDate
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-"); // Current date as start date
  const endDate = new Date(currentDate.setDate(currentDate.getDate() + 7))
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-"); // Adding 7 days to current date
  const params: any = {
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "is_day",
      "precipitation",
      "rain",
      "showers",
      "weather_code",
      "cloud_cover",
      "pressure_msl",
      "surface_pressure",
      "wind_speed_10m",
      "wind_direction_10m",
      "wind_gusts_10m",
    ],
    hourly: ["temperature_2m", "precipitation", "weather_code"],
  };

  params["latitude"] = latitude;
  params["longitude"] = longitude;
  params["start_date"] = startDate;
  params["end_date"] = endDate;
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  Object.keys(params).forEach((key) => {
    if (Array.isArray(params[key])) {
      params[key].forEach((value: string) => {
        url.searchParams.append(key, value);
      });
    } else {
      url.searchParams.append(key, params[key]);
    }
  });

  const res = await fetch(url.toString());
  const resw = await res.json();

  const todayHourlyData = resw.hourly;
  const todayHourlyTemperature = todayHourlyData.temperature_2m.slice(0, 24);
  const todayHourlyWeatherCode = todayHourlyData.weather_code.slice(0, 24);
  const todayHourlyTime = todayHourlyData.time.slice(0, 24);

  // Extracting hourly data for the next 7 days
  const next7DaysHourlyTemperature = todayHourlyData.temperature_2m.slice(24);
  const next7DaysHourlyWeatherCode = todayHourlyData.weather_code.slice(24);
  const next7DaysHourlyTime = todayHourlyData.time.slice(24);

  // Combining the extracted data into an array of objects

  const todayWeatherData = todayHourlyTime.map(
    (time: string, index: number) => ({
      time,
      temperature: todayHourlyTemperature[index],
      weatherCode: todayHourlyWeatherCode[index],
    })
  );

  const next7DaysWeatherData = next7DaysHourlyTime.map(
    (time: any, index: string | number) => ({
      time,
      temperature: next7DaysHourlyTemperature[index],
      weatherCode: next7DaysHourlyWeatherCode[index],
    })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return { ...resw, todayWeatherData, next7DaysWeatherData, ok: true };
}
