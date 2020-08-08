import React, { useState } from "react";
import { Card, Typography, Divider, Col, Row,Button } from "antd";
import { HeadsetMic } from "@material-ui/icons";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./steps.scss";
import carrepair from "../../../../assets/carrepair.svg";

const { Text } = Typography;

const Tab = (props) => {
  const { index, handleClick, isSelected, children } = props;
  return (
    <li
      data-index={index}
      onClick={handleClick}
      className={isSelected ? "tab-active" : "tab-inactive"}
    >
      {children}
    </li>
  );
};

const TabList = ({ children }) => (
  <ul style={{ display: "flex", justifyContent: "space-between" }}>
    {children}
  </ul>
);

const TabPanel = (props) => {
  const { isSelected, children } = props;

  return isSelected && <section>{children}</section>;
};

export default () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (e) => {
    const index = e.currentTarget.dataset.index;
    setSelected(index);
  };

  return (
    <Card className="stepBody">

<Row>
      <Col flex="100px" style={{display:'flex', alignSelf:'center',justifyContent:'flex-end'}}><ArrowBackIcon  className="backIcon" /></Col>
      <Col flex="auto"> <TabList>
        <Tab index={0} isSelected={selected == 0} handleClick={handleClick}>
          Seguro de Autos Clásico{" "}
        </Tab>
        <Tab index={1} isSelected={selected == 1} handleClick={handleClick}>
          Seguro de Autos Básico
        </Tab>
        <Tab index={2} isSelected={selected == 2} handleClick={handleClick}>
          {" "}
          Seguro de Autos Global
        </Tab>
      </TabList></Col>
    </Row>
     
      <Divider style={{ width: "80%" }} />
      <TabPanel isSelected={selected == 0}>
        <Col className="colStep">
          <Text className="titleStep">Seguro de Autos Clásico </Text>
          <Text className="textGrayStep">Lorem ipsum dolor sit amet.</Text>
          <p className="descStep">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus
            odio elit egestas faucibus , Massa molestie in tincidunt mattis.
            Aliquet cursus proin gravida ut elementum volutpat nunc, et.
          </p>

          <Text className="titleStep">Purus libero dictumst lorem </Text>
          <Row gutter={[16, 16]}>
            <Col className="colP" span={12}>
              <Row>
                <img src={carrepair} />
                <p className="textdescStep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas dignissim a sagittis vestibulum, duis.
                </p>
              </Row>
            </Col>
            <Col className="colP" span={12}>
              <Row>
                <img src={carrepair} />
                <p className="textdescStep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas dignissim a sagittis vestibulum, duis.
                </p>
              </Row>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col className="colP" span={12}>
              <Row>
                <img src={carrepair} />
                <p className="textdescStep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas dignissim a sagittis vestibulum, duis.
                </p>
              </Row>
            </Col>
            <Col className="colP" span={12}>
              <Row>
              <img src={carrepair} />
              <p className="textdescStep">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                dignissim a sagittis vestibulum, duis.
              </p>
              </Row>
            
            </Col>
          </Row>
          <p className="descStep">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus
            odio elit egestas faucibus , Massa molestie in tincidunt mattis.
            Aliquet cursus proin gravida ut elementum volutpat nunc, et.
          </p>
          <Row style={{display:'flex',justifyContent:'center'}}>
          <Button className="buttonContactSteps">
                      <HeadsetMic />
                      <Text className="textContact">
                        Quiero saber más de este producto
                      </Text>
                    </Button>
                    </Row>
        </Col>
      </TabPanel>
      <TabPanel isSelected={selected == 1}>
        <h2>Seguro de Autos Básico</h2>
      </TabPanel>
      <TabPanel isSelected={selected == 2}>
        <h2>Seguro de Autos Global</h2>
      </TabPanel>
    </Card>
  );
};
