// components/Layout.js
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Sidebar from "./sidebar";

const Customlayout = ({ children }: { children: any }) => {
  return (

        <Container   className="p-2">
          <Row>
            <Col xs={1}>

                <Sidebar />

            </Col>
            <Col xs={11}>
              <SearchBar />

              {children}
            </Col>
          </Row>
        </Container>

  );
};

export default Customlayout;
