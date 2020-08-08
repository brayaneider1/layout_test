import React from "react";
import { Button, Row, Col } from "antd";
import logo from '../../assets/Berrisafe.svg'

import "./Header.scss";

export default () =>{
  return (
    <div className="site-page-header">
      <Row>
        <Col flex="1 1 300px">
          <img src={logo} className="text-white title"></img>
        </Col>
        <Col flex="0 1 300px" className="centered">
          <Button className="headerRight" type="link">
            ¿Que es Berrysafe?
          </Button>
        </Col>
      </Row>
    </div>
  );
}
