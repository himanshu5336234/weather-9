import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherCard from "src/component/WeatherCard";
import WeatherDetails from "src/component/WeatherDetails";
import { cities, selectedCityDetails } from "src/constant/constant";

const Weather = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={8}>
          {cities.map((cityData, index) => (
            <WeatherCard key={index} {...cityData} />
          ))}
        </Col>
        <Col md={4}>
          <WeatherDetails {...selectedCityDetails} />
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
