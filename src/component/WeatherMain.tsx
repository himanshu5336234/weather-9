// components/WeatherMain.js
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import WeatherIcon from "./weatherIcon";

const WeatherMain = ({ forecast }: { forecast: any }) => {

  return (
    <Card >
      <Card.Body>
        <Row>
        <Col sm={6}>
          <h1 style={{fontWeight:"bold",margin:0}}>
            {forecast.name}
          </h1>
          <div>

          <p style={{marginBottom:40}}>Chance of rain: {forecast.rain}%</p>
          <h1 style={{fontWeight:"bold"}}>{forecast.temperature_2m}°</h1>
          </div>
      
          </Col>
          <Col className="text-left" sm={6}>

          <WeatherIcon styles={{fontSize:"70px"}} weatherCode={forecast.weather_code} isName={true} />
          </Col>
        </Row>
  
   

       
      </Card.Body>

    </Card>
  );
};

export default WeatherMain;
