// EXTERNAL DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
import { TextField as MaterialTextField } from "material-ui";

//Textfield styles
import { styles } from "./styles.scss";

export default function TextField(props) {
  return (
    <div className={styles}>
      <MaterialTextField {...props} />
    </div>
  );
}

TextField.propTypes = {
  hintText: PropTypes.string,
  type: PropTypes.string
};

TextField.defaultProps = {
  type: "text"
};
