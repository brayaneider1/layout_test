import React, { Fragment } from "react";
import { Card, Button, Row, Col, Typography } from "antd";
import "./Products.scss";
import car from "../../../../assets/car.svg";
import pattern1 from "../../../../assets/pattern1.svg";
import pattern2 from "../../../../assets/pattern2.svg";
import Media from "react-media";

import { HeadsetMic, CallReceived } from "@material-ui/icons";
const { Text } = Typography;

const CardProduct = (props) => {
  return (
    <Col
      flex="1 1 600px"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      span={props.spam}
    >
      <Row style={{ display: "flex" }}>
        <Text className="textSecure">Seguro de Autos </Text>
        <img alt="car" className="car" src={car} />
      </Row>
      <p className="descSecure">
        Felis at blandit sed semper. Ullamcorper velit imperdiet quis
        ullamcorper nisl lectus facilisis erat maecenas. Blandit in vitae
        commodo tellus volutpat sed.
      </p>
      <Button className="buttonContact">
        <HeadsetMic />
        <Text className="textContact">Quiero saber más de este producto</Text>
      </Button>
    </Col>
  );
};

const AnotherProducts=(props)=>{
  return(
  <Col flex={props.flex}>
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <Card className="cardPg1">
        <Text className="textPg">Familia</Text>
      </Card>
    </Col>
    <Col span={12}>
      <Card className="cardPg2">
        <Text className="textPg">Salud</Text>
      </Card>
    </Col>
  </Row>
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <Card className="cardPg3">
        <Text className="textPg">Vida</Text>
      </Card>
    </Col>
    <Col span={12}>
      <Card className="cardPg4">
        <Text className="textPg">Viajes</Text>
      </Card>
    </Col>
  </Row>

  <Button className="buttonMore">Ver más...</Button>
</Col>

)

}

export default () => {
  return (
    <div>
      <Card className="productBody">
        <Col>
          <Text className="titleProduct">Productos</Text>
          <Row style={{ paddingTop: 20 }}>
            <Col flex="1 1 200px" style={{ paddingRight: 10 }}>
              <Card className="cardSecure">
                <Row>


                <Media
queries={{
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1590px)",
  large: "(min-width: 1591px)",
}}
>
{(matches) => (
  <Fragment>
    {matches.small && (
   <CardProduct spam={24} />
    )}
    {matches.medium && (
    <CardProduct spam={24} />
    )}
    {matches.large && (
    <CardProduct spam={12} />
    )}
  </Fragment>
)}
</Media>

                  
                  <Col className="colReceived" span={2}>
                    <CallReceived className="callReceived" />
                  </Col>
                </Row>
              </Card>
              <div style={{ marginTop: 20, marginLeft: 30 }}>
                <Text className="textYear">
                  +10 Años vendiendo seguros de Autos
                </Text>
                <Row
                  style={{
                    paddingTop: 20,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text className="textPatterns">Patrocinado por</Text>
                  <div className="ball">
                    <img alt="pattern1" src={pattern1} />
                  </div>
                  <div className="ball">
                    <img alt="pattern2" src={pattern2} />
                  </div>
                </Row>
              </div>
            </Col>


            <Media
queries={{
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1590px)",
  large: "(min-width: 1591px)",
}}
>
{(matches) => (
  <Fragment>
    {matches.small && (
  <AnotherProducts flex="0 1 100%"/>
    )}
    {matches.medium && (
   <AnotherProducts flex="0 1 100%"/>
    )}
    {matches.large && (
  <AnotherProducts flex="0 1 400px"/>
    )}
  </Fragment>
)}
</Media>



          </Row>
        </Col>
      </Card>
    </div>
  );
};


