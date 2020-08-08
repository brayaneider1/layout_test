import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Typography,
  Rate,
  Progress,
  Divider,
} from "antd";
import {
  StarFilled,
  CaretRightFilled,
  CaretDownFilled,
} from "@ant-design/icons";

import "./Rate.scss";

const { Text } = Typography;

export default () => {
  return (
    <Card className="rateBody">
      <Row>
        <Col span={12}>
          <Text className="titleRate">Calificaciones de Usuarios</Text>
          <Row style={{ paddingTop: '10%' }}>
            <Col
              span={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                
              }}
            >
              <Text className="textRates">
                {
                  <Text
                    className="textRates"
                    style={{ fontWeight: "bold" }}
                    value="128"
                  >
                    128
                  </Text>
                }
                calificaciones
              </Text>

              <Text className="numberRate">4.6</Text>
              <Rate className="rate" allowHalf defaultValue={4.6} />
            </Col>
            <Col span={12}>
              <Row className="rowRates">
                <Text>5</Text>
                <StarFilled
                  style={{ alignItems: "center", color: "#4b3a7c" }}
                  height={10}
                />
                <Progress
                  strokeColor={{
                    "0%": "#35D8D0",
                    "100%": "#35D8D0",
                  }}
                  style={{ width: "60%" }}
                  percent={93}
                  showInfo={false}
                />
                <Text>93</Text>
              </Row>
              <Row className="rowRates">
                <Text>4</Text>
                <StarFilled
                  style={{ alignItems: "center", color: "#4b3a7c" }}
                  height={10}
                />
                <Progress
                  strokeColor={{
                    "0%": "#35D8D0",
                    "100%": "#35D8D0",
                  }}
                  style={{ width: "60%" }}
                  percent={25}
                  showInfo={false}
                />
                <Text>25</Text>
              </Row>
              <Row className="rowRates">
                <Text>3</Text>
                <StarFilled
                  style={{ alignItems: "center", color: "#4b3a7c" }}
                  height={10}
                />
                <Progress
                  strokeColor={{
                    "0%": "#35D8D0",
                    "100%": "#35D8D0",
                  }}
                  style={{ width: "60%" }}
                  percent={10}
                  showInfo={false}
                />
                <Text>10</Text>
              </Row>
              <Row className="rowRates">
                <Text>2</Text>
                <StarFilled
                  style={{ alignItems: "center", color: "#4b3a7c" }}
                  height={10}
                />
                <Progress
                  strokeColor={{
                    "0%": "#f6f6f6",
                    "100%": "#f6f6f6",
                  }}
                  style={{ width: "63%" }}
                  percent={10}
                  showInfo={false}
                />
                <Text>0</Text>
              </Row>
              <Row className="rowRates">
                <Text>1</Text>
                <StarFilled
                  style={{ alignItems: "center", color: "#4b3a7c" }}
                  height={10}
                />
                <Progress
                  strokeColor={{
                    "0%": "#f6f6f6",
                    "100%": "#f6f6f6",
                  }}
                  style={{ width: "63%" }}
                  percent={10}
                  showInfo={false}
                />
                <Text>0</Text>
              </Row>
            </Col>

            <Button className="buttonContact2">
              <Text className="textContact">Calificar agente</Text>
            </Button>
          </Row>
        </Col>
        <Col span={12}>
          <Card className="cardGray">
            <Col>
              <div>
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text className="textbadRate">
                    Mejor y peor calificación
                  </Text>
                  <CaretDownFilled className="textbadRate" />
                </Row>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 20,
                  }}
                >
                  <Text className="textuserRates">Milena Gutierrez </Text>
                  <Rate className="rate2" allowHalf defaultValue={5} />
                </Row>
                <Text className="textDate"> 25 de Julio, 2020 </Text>
                <p style={{ color: "black", paddingTop: 20 }}>
                  " Tortor est et vivamus in. Malesuada sapien montes, arcu,
                  velit. Id morbi vulputate nibh ut dictum neque. "
                </p>
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text className="textbadRate">
                  Ver más calificaciones

                  </Text>
                  <CaretRightFilled className="moreRate" />
                </Row>
                <Divider className="divider" />
              </div>
              <div>
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text className="textbadRate">
                  Mejor y peor calificación                  </Text>
                  <CaretDownFilled className="textbadRate" />
                </Row>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 20,
                  }}
                >
                  <Text className="textuserRates">Jordan Rolón </Text>
                  <Rate className="rate2" allowHalf defaultValue={3} />
                </Row>
                <Text className="textDate"> 25 de Octubre, 2020</Text>
                <p style={{ color: "black", paddingTop: 20 }}>
                  " Laoreet natoque velit et dolor lacus, viverra aliquam urna.
                  Lectus sit venenatis vitae enim. Enim felis "
                </p>
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text className="textbadRate">
                  Ver más calificaciones
                  </Text>
                  <CaretRightFilled className="moreRate" />
                </Row>
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
