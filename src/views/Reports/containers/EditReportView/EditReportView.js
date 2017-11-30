import React from "react";

const EditReportView = props => {
  console.log(props);
  return <div>Editing the report with id of {props.match.params.id}</div>;
};

export default EditReportView;
