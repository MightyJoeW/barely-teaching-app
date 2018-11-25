// EXTERNAL DEPENDENCIES
import React, { Fragment } from "react";

// INTERNAL DEPENDENCIES
import SummerCalc from "../../components/SummerCalc";
import Calendar from "../../components/Calendar";

// COMPONENT DEFINITION
const KidFreeView = () => {
  return (
    <Fragment>
      <SummerCalc />
      <Calendar />
    </Fragment>
  );
};

export default KidFreeView;
