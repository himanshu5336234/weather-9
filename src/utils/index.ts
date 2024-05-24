export const buildWeatherApiUrl = (params: any) => {
  const baseUrl = "/weather";
  const query = new URLSearchParams();

  if (params.latitude && params.longitude && params.name) {
    query.append("latitude", params.latitude);
    query.append("longitude", params.longitude);
    query.append("name", params.name);
  }
  return `${baseUrl}/${params.latitude}/${params.longitude}?name=${params.name ||""}`;
};
export const DayOfWeekString = (dateString: any) => {
  // Convert the dateString to a Date object
  const date = new Date(dateString);

  // Array of day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week from the Date object (0 for Sunday, 1 for Monday, etc.)
  const dayIndex = date.getDay();

  // Get the corresponding day name from the array
  const dayName = dayNames[dayIndex];

  return dayName;
};

export const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  const options: any = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleTimeString("en-US", options);
};
