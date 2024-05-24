// components/AirConditions.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const AirConditions = ({ conditions }: { conditions: any }) => {
  if (!conditions || conditions.length === 0) return null;
  return (
    <Card className="mt-4">
      <Card.Body>
        <h5>Air Conditions</h5>
        <Row>
          <Col className="text-center">
            <p>Real Feel</p>
            <p>{conditions.temperature_2m}°</p>
          </Col>
          <Col className="text-center">
            <p>Wind</p>
            <p>{conditions.wind_speed_10m} km/h</p>
          </Col>
          {/* <Col className="text-center">
            <p>Chance of rain</p>
            <p>{conditions.rainChance}%</p>
          </Col> */}
          {/* <Col className="text-center">
            <p>UV Index</p>
            <p>{conditions.uvIndex}</p>
          </Col> */}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AirConditions;
