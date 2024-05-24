// components/WeatherCard.js
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = (props: any) => {
  const { city, time, temperature, icon } = props;
  return (
    <Card className="mb-4 rounded-4">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image src={icon} alt="weather-icon" width="50" className="me-3" />
          <div>
            <h5>{city}</h5>
            <p className="mb-0">{time}</p>
          </div>
        </div>
        <div>
          <h3>{temperature}°</h3>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
