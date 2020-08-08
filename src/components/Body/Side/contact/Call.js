import React, { useState } from "react";
import { Card, Typography, Divider, Col, Row,Button } from "antd";
import {Brightness1,Call,Videocam} from '@material-ui/icons';
import {
    WhatsAppOutlined
  } from "@ant-design/icons";
import "./contact.scss";


const { Text } = Typography;


export default () => {
  

  return (
      <div>
        <Card className="contactCall"
        >

            <Row style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                <Brightness1/>
                <Text className="titleProduct"> ¡Estoy disponible!</Text>
                <Videocam/>
                <Divider type='vertical' />
                <Call/>



            </Row>

        </Card>
        

      </div>
   
  );
};
