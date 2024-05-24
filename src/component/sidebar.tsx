import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faCity } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Nav className="d-flex flex-column vh-100  my-4 ">
      <Nav.Item className="text-center my-1">
        <FontAwesomeIcon style={{fontSize:"20px"}} icon={faCloudRain} size="2x" />
        <Link
          style={{ color: "black",fontSize:"14px" }}
          className="nav-link "
          aria-current="page"
          href="/weather"
        >
          Weather
        </Link>
      </Nav.Item>
      <Nav.Item className="text-center my-3">
        <FontAwesomeIcon style={{fontSize:"20px"}} icon={faCity} size="2x" />
        <Link
          style={{ color: "blLinkck",fontSize:"14px" }}
          className="nav-link "
          aria-current="page"
          href="/cities"
        >
          Cities
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
