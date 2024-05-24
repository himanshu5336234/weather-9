// components/SevenDayForecast.js
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { DayOfWeekString } from "src/utils";
import WeatherIcon from "./weatherIcon";

const SevenDayForecast = ({ forecast }: { forecast: any }) => {
  if (!forecast || forecast.length === 0) return null;
  return (
    <Card>
      <Card.Body>
        <h5>7-Day Forecast</h5>

        <ListGroup style={{ height: "80VH", overflowY: "scroll" }}>
          {forecast.map(
            (
              item: {
                time:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                weatherCode:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                temperature:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <span> {DayOfWeekString(item.time)}</span>
                <div
                  style={{
                    display: "flex",
                    minWidth: "100px",
                    alignItems: "center",
                  }}
                >
                  <WeatherIcon styles={{}} weatherCode={item.weatherCode} isName={true} />
                </div>

                <span>{item.temperature}°</span>
              </ListGroup.Item>
            )
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SevenDayForecast;
