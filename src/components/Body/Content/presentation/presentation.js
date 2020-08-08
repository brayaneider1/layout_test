import React, { Fragment } from "react";
import { Card, Button, Row, Col, Typography, Avatar } from "antd";
import { InfoCircleFilled, CheckCircleFilled } from "@ant-design/icons";
import {
  Room,
  VerifiedUserSharp,
  Instagram,
  Facebook,
  Twitter,
} from "@material-ui/icons";
import Media from "react-media";

import figure from "../../../../assets/figure.svg";
import avatar from "../../../../assets/avatar.svg";
import ana from "../../../../assets/ana.svg";
import meetlife from "../../../../assets/meetlife.svg";
import qualitas from "../../../../assets/qualitas.svg";
import hdi from "../../../../assets/hdi.svg";
import gnp from "../../../../assets/gnp.svg";

import "./presentation.scss";
const { Text } = Typography;

const ColAvatar = (props) => {
  return (
    <Col span={props.col} className="avatar">
      <Avatar className="avatarImg" size={110} src={avatar} />
      <Row className="description">
        <VerifiedUserSharp className="avatarIcon" />
        <Text className="avatarText">Berrymaster</Text>
        <InfoCircleFilled className="informationIcon" />
      </Row>
    </Col>
  );
};

const ColDesc = (props) => {
  return (
    <Col span={props.col}>
      <Row>
        <Text className="nameText">Juan Andrés Ramirez Lopez</Text>
        <CheckCircleFilled className="checkIcon" />
      </Row>
      <Row style={{ justifyContent: "flex-start" }}>
        <Text className="descText">Asesor profesional de seguros</Text>
        <Row>
          <Room className="RoomIcon" />
          <Text className="descText">
            Avenida Insurgentes Sur, código 2, Mexico
          </Text>
        </Row>
      </Row>
      <Col style={{ justifyContent: "flex-start" }} span={6}>
        <Row>
          <Instagram className="socialIcon" />
          <Facebook className="socialIcon" />
          <Twitter className="socialIcon" />
        </Row>
      </Col>
      <p className="profile">
        Desde hace 16 años pertenecemos al sector afianzador y asegurador,
        teniendo como especialidad la intermediación, gestión, asesoría y
        emisión de garantías como fianzas y seguros de caución....
        {
          <Button className="more" type="link">
            Leer más
          </Button>
        }
      </p>
    </Col>
  );
};

const ColImg = () => {
  return (
    <Col className="span" span={6}>
      <img alt="example" style={{ height: "100%" }} src={figure} />
    </Col>
  );
};
export default () => {
  return (
    <div>
      <Card className="bodyPresent">
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1525px)",
            large: "(min-width: 1526px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <Col>
                  <Row
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ColAvatar col={10} />

                    <ColImg />
                  </Row>
                  <div style={{ paddingTop: "5vh" }}>
                    <ColDesc col={24} />
                  </div>
                </Col>
              )}
              {matches.medium && (
                <Col>
                  <Row
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ColAvatar col={10} />

                    <ColImg />
                  </Row>
                  <div style={{ paddingTop: "5vh" }}>
                    <ColDesc col={24} />
                  </div>
                </Col>
              )}
              {matches.large && (
                <Row>
                  <ColAvatar col={5} />

                  <ColDesc col={12} />
                  <ColImg />
                </Row>
              )}
            </Fragment>
          )}
        </Media>
      </Card>
      <Card className="jobs">
        <Row
          justify="space-between center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          <Col className="gutter-row" span={4}>
            <img alt="example" style={{ height: "100%" }} src={meetlife} />
          </Col>
          <Col justify="center" span={4}>
            <img alt="example" style={{ height: "100%" }} src={qualitas} />
          </Col>
          <Col className="gutter-row" span={4}>
            <img alt="example" style={{ height: "100%" }} src={gnp} />
          </Col>
          <Col className="gutter-row" span={4}>
            <img alt="example" style={{ height: "100%" }} src={hdi} />
          </Col>
          <Col span={4}>
            <img alt="example" style={{ height: "100%" }} src={ana} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
