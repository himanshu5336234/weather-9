import Image from "next/image";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const WeatherDetails = (props: {
  city: any;
  temperature: any;
  chanceOfRain: any;
  forecast: any;
}) => {
  const { city, temperature, chanceOfRain, forecast } = props;
  return (
    <Card>
      <Card.Body>
        <h3>{city}</h3>
        <p>Chance of rain: {chanceOfRain}%</p>
        <h1>{temperature}°</h1>
        <h5>Today &apos;s Forecast</h5>
        <div className="d-flex justify-content-between">
          {forecast.today.map((item: any, index: any) => (
            <div key={index} className="text-center">
              <p>{item.time}</p>
              <Image src={item.icon} alt="weather-icon" width="40" />
              <p>{item.temperature}°</p>
            </div>
          ))}
        </div>
        <h5>3-Day Forecast</h5>
        <ListGroup>
          {forecast.threeDay.map((f: any, index: any) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between"
            >
              <span>{f.day}</span>
              <span>{f.weather}</span>
              <span>
                {f.high}/{f.low}°
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default WeatherDetails;
