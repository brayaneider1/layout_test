import React from "react";
import { Card, Typography, Divider, Row, Button } from "antd";
import { Brightness1, Call, Videocam, Mail } from "@material-ui/icons";
import { WhatsAppOutlined } from "@ant-design/icons";
import "./contact.scss";
import img from '../../../../assets/img.svg'

const { Text } = Typography;

export default () => {
  return (
    <div>
      <Card style={{ textAlign: "center" }} className="contactBody">
        <Text className="titleContacme">¡Contactame ya!</Text>
        <Button className="buttonContact3">
          <WhatsAppOutlined />
          <Text className="textContact2">Escribeme por whatsapp</Text>
        </Button>
      </Card>
      <Card className="contactCall">
        <Row style={{ alignItems: "center", marginBottom: 10 }}>
          <Brightness1
            style={{ color: "#6FCF97", fontSize: "10px", marginRight: "20px" }}
          />
          <Text className="textCallme"> ¡Estoy disponible!</Text>
          <Videocam className="contactIcon" />
          <Divider type="vertical" />
          <Call className="contactIcon" />
        </Row>
        <Text className="textContacme"> ¿Quieres agendar una llamada? </Text>
      </Card>
      <Card className="contactCall2">
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <Text className="textCallme">Escríbeme un correo </Text>
          <Button className="buttonContact4">
            <Mail className="mailIcon" />
          </Button>
        </Row>
        <Divider style={{ width: "90%" }} />
        <p style={{fontSize:'10px',justifyContent:'center',padding:'0 40px 0 40px'}}>
          Vestibulum, amet, urna sit lorem. Tempor malesuada eleifend sodales
          quis et dui pulvinar. Urna, velit volutpat, nunc, augue scelerisque
          suscipit. Maecenas amet nibh sed faucibus blandit donec sed penatibus.
          Fringilla ultrices nisl adipiscing leo placerat. Non semper malesuada
        </p>
        <img className="banner"  src={img} />
      </Card>
    </div>
   
  );
};
