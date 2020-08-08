import React, { Fragment } from "react";
import { Row, Col } from "antd";
import Content from "./Content/Content";
import Side from "./Side/Side";
import Media from "react-media";

import "./Body.scss";

export default () => {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1399px)",
        large: "(min-width: 1400px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <Col
            className="body"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Content />
            <Side />
          </Col>
          )}
          {matches.medium && (
            <Col
              className="body"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Content />
              <Side />
            </Col>
          )}
          {matches.large && (
            <Row
              className="body"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Col flex="1 1 300px">
                <Content />
              </Col>
              <Col flex="0 1 600px" style={{ paddingLeft: 50 }}>
                <Side />
              </Col>
            </Row>
          )}
        </Fragment>
      )}
    </Media>
  );
};
