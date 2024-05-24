import React from "react";

interface WeatherIconProps {
  weatherCode: any;
  isName: boolean;
  styles:any
}

const weatherCodeToIconMap: {
  [key: number]: { iconClass: string | null; name: string };
} = {
  0: { iconClass: "bi bi-sun", name: "Clear sky" },
  1: { iconClass: "bi bi-cloud", name: "Mainly clear" },
  2: { iconClass: "bi bi-cloud", name: "Partly cloudy" },
  3: { iconClass: "bi bi-cloud", name: "Overcast" },
  45: { iconClass: "bi bi-cloud-fog", name: "Fog" },
  48: { iconClass: "bi bi-cloud-fog", name: "Depositing rime fog" },
  51: { iconClass: "bi bi-cloud-drizzle", name: "Light drizzle" },
  53: { iconClass: "bi bi-cloud-drizzle", name: "Moderate drizzle" },
  55: { iconClass: "bi bi-cloud-drizzle", name: "Dense drizzle" },
  56: { iconClass: "bi bi-cloud-sleet", name: "Light freezing drizzle" },
  57: { iconClass: "bi bi-cloud-sleet", name: "Dense freezing drizzle" },
  61: { iconClass: "bi bi-cloud-rain", name: "Slight rain" },
  63: { iconClass: "bi bi-cloud-rain", name: "Moderate rain" },
  65: { iconClass: "bi bi-cloud-rain", name: "Heavy rain" },
  66: { iconClass: "bi bi-cloud-hail", name: "Light freezing rain" },
  67: { iconClass: "bi bi-cloud-hail", name: "Heavy freezing rain" },
  71: { iconClass: "bi bi-cloud-snow", name: "Slight snow" },
  73: { iconClass: "bi bi-cloud-snow", name: "Moderate snow" },
  75: { iconClass: "bi bi-cloud-snow", name: "Heavy snow" },
  77: { iconClass: null, name: "Snow grains" },
  80: { iconClass: "bi bi-cloud-rain-heavy", name: "Slight rain showers" },
  81: { iconClass: "bi bi-cloud-rain-heavy", name: "Moderate rain showers" },
  82: { iconClass: "bi bi-cloud-rain-heavy", name: "Violent rain showers" },
  85: { iconClass: "bi bi-cloud-snow-heavy", name: "Slight snow showers" },
  86: { iconClass: "bi bi-cloud-snow-heavy", name: "Heavy snow showers" },
  95: {
    iconClass: "bi bi-cloud-lightning",
    name: "Slight or moderate thunderstorm",
  },
  96: {
    iconClass: "bi bi-cloud-lightning-rain",
    name: "Thunderstorm with slight hail",
  },
  99: {
    iconClass: "bi bi-cloud-lightning-rain",
    name: "Thunderstorm with heavy hail",
  },
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherCode, isName, styles }) => {
  const { iconClass, name } = weatherCodeToIconMap[weatherCode] || {
    iconClass: null,
    name: "",
    styles
  };
  if (!iconClass) {
    return null; // Return null if no matching icon
  }

  return (
    <div>
      <i className={iconClass} style={styles}></i>
      {isName && <p>{name}</p>}
    </div>
  );
};

export default WeatherIcon;
