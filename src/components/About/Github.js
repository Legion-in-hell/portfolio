import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Les jours où j'ai <strong className="purple">codé</strong>
      </h1>
      <GitHubCalendar
        username="Legion-in-Hell"
        blockSize={15}
        blockMargin={5}
        color="#91a8ff"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
