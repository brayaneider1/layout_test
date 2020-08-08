import React from "react";
import Presentation from "./presentation/presentation";


import Prodcuts from "./Products/Products";
import Steps from "./steps/steps";
import Rate from "./Rate/Rate";
import More from "./More/More";
import Location from "./Location/Location";
//import "./Content.scss";

export default () => {
  return (
    <div>
      <Presentation />
      <Prodcuts />
      <Steps />
      <Rate />
      <More />
      <Location />
     
    </div>
  );
};
