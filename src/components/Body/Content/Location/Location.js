import React from "react";
import { Card, Row, Col, Avatar, Typography } from "antd";
import { Instagram, Facebook, Twitter } from "@material-ui/icons";

import avatar from "../../../../assets/avatar.svg";

import Map from "./Map";
import "./Location.scss";

const { Text } = Typography;

export default () => {
  return (
    <div>
      <Card bodyStyle={{ padding: 0 }} className="locationBody">
        <Card className="contentMap">
          <Col style={{display:'contents'}}>
            <Row
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                paddingBottom: 40,
              }}
            >
              <Avatar
                style={{ marginRight: 30 }}
                className="avatarImg"
                size={60}
                src={avatar}
              />
              <Text className="textSecure">Juan Andrés Ramirez Lopez</Text>
            </Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
              span={18}
            >
              <Text  className="textSecure">
                Avenida Insurgentes Sur, código 2
              </Text>

              <Text style={{paddingTop:'10px'}} className="textArticle">Mexico City, CDMX, Mexico </Text>
            </Col>

            <Col style={{ justifyContent: "flex-start",paddingTop:20 }} span={6}>
              <Row >
                <Instagram className="socialIcons" />
                <Facebook className="socialIcons" />
                <Twitter className="socialIcons" />
              </Row>
            </Col>
          </Col>
        </Card>

        <Map />
      </Card>
    </div>
  );
};
