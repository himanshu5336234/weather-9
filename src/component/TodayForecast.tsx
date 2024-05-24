// components/TodayForecast.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { formatTime } from "src/utils";
import WeatherIcon from "./weatherIcon";

const TodayForecast = ({ forecast }: { forecast: any }) => {
  if (!forecast || forecast.length === 0) return null;
  return (
    <Card className="mt-4">
      <Card.Body>
        <h5>Today &apos;s Forecast</h5>
        <Row
          className="mt-4"
          style={{ gap: "5px", height: "40vh", overflowY: "auto" }}
        >
          {forecast.map((item: any, index: any) => (
            <Col
              key={index}
              md={3}
              style={{ minWidth: "100px" }}
              className="text-center"
            >
              <Card>
                <Card.Body>
                  <p>{formatTime(item.time)}</p>

                  <WeatherIcon weatherCode={item.weatherCode} isName={false} styles={undefined} />
                  <p>{item.temperature}°</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TodayForecast;
