import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import { CaretRightFilled,CaretDownFilled } from "@ant-design/icons";

import "./More.scss";
const { Text } = Typography;

export default () => {
  return (
    <div>
      <Card className="productBody">
        <Col>
          <Text className="titleRate">Tambien te puede interesar</Text>
          <Row
            style={{
              paddingTop: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={13}>
              <Card
                className="cardSecure1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <Col>
                    <Text className="textSecure">
                      Accumsan urna sit bibendum nunc.
                    </Text>
                    <p className="descMore">
                      Felis at blandit sed semper. Ullamcorper velit imperdiet
                      quis ullamcorper .
                    </p>
                    <Row>
                      <Text className="textArticle">Ver articulo</Text>
                      <CaretRightFilled className="moreRate" />
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={5}>
              <Card
                className="cardSecure1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <Col>
                    <Text className="textSecure">
                      Id consectetur sed purus accumsan.
                    </Text>
                    <Row>
                      <Text className="textArticle">Ver articulo</Text>
                      <CaretRightFilled className="moreRate" />
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={5}>
              <Card className="cardSecure2"></Card>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={6}>
              <Card
                className="cardSecure3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <Col>
                    <Text className="textSecure">
                      Id consectetur sed purus accumsan.
                    </Text>
                    <Row>
                      <Text className="textArticle">Ver articulo</Text>
                      <CaretRightFilled className="moreRate" />
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={17}>
              <Card
                className="cardSecure4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <Col>
                    <Text className="textSecure">
                      Accumsan urna sit bibendum nunc.
                    </Text>
                    <p className="descMore">
                      Felis at blandit sed semper. Ullamcorper velit imperdiet
                      quis ullamcorper .
                    </p>
                    <Row>
                      <Text className="textArticle">Ver articulo</Text>
                      <CaretRightFilled className="moreRate" />
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row style={{display:'flex',justifyContent:'center'}}>

          <Button className="buttonviewMore">
            <Text className="textviewMore">Ver más</Text>
            <CaretDownFilled />
          </Button>

          </Row>
        </Col>
      </Card>
    </div>
  );
};
