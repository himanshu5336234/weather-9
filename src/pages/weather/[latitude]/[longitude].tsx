import React from "react";
import { GetServerSideProps } from "next";
import { fetchWeatherData } from "src/pages/api/weather";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import TodayForecast from "src/component/TodayForecast";
import SevenDayForecast from "src/component/SevenDayForecast";
import AirConditions from "src/component/AirConditions";
import WeatherMain from "src/component/WeatherMain";
type WeatherData = {
  name:string;
  latitude: number;
  longitude: number;
  current: {
    temperature: number;
    windspeed: number;
  };
  hourly: {
    temperature_2m: number[];
    relative_humidity_2m: number[];
    windspeed_10m: number[];
  };
  todayWeatherData: any;
  next7DaysWeatherData: any;
};

const WeatherPage = ({
  weatherData,
  error,
}: {
  weatherData: WeatherData;
  error: any;
}) => {
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Error fetching weather data: {error.message}
        </Alert>
      </Container>
    );
  }
  if (Object.keys(weatherData).length === 0) {
    return (
      <Container className="mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  const { current, todayWeatherData, next7DaysWeatherData , name} = weatherData;
  return (
    <Container>
      <Row className="mt-5">
        <Col md={7}>
          <WeatherMain forecast={{...current,name}} />
          <TodayForecast forecast={todayWeatherData} />
          <AirConditions conditions={current} />
        </Col>
        <Col md={5}>
          <SevenDayForecast forecast={next7DaysWeatherData} />
        </Col>
      </Row>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {

    const { latitude, longitude,name } = query;

    const res = await fetchWeatherData({ latitude, longitude });
    if (!res) {
      throw new Error("Failed to fetch");
    }

    return {
      props: { weatherData: {...res,name} },
    };
  } catch (error) {
    return { props: { error: error.message } };
  }
};

export default WeatherPage;
