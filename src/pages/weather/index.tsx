import React from "react";
import { Container, Spinner } from "react-bootstrap";

const index = () => {
  return (
    <Container className="mt-5">
      <Spinner animation="border" role="status"></Spinner>
      <span className="sr-only">Loading...</span>
    </Container>
  );
};

export default index;
