import React from "react";
import PropTypes from "prop-types";
import {
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  IconButton
} from "material-ui";

//Buton styles
import { styles } from "./styles.scss";

const mainClassName = "btn";

export default function Button(props) {
  const buttonElem = createButton(props);
  return <div className={styles}>{buttonElem}</div>;
}

function createButton(props) {
  const {
    label,
    className,
    onClick,
    icon,
    disabled,
    primary,
    secondary
  } = props;

  let buttonElem;

  if (props.floating) {
    buttonElem = (
      <FloatingActionButton
        label={label}
        onClick={onClick}
        className={`${mainClassName} ${className}`}
        icon={icon}
        disabled={disabled}
        secondary={true}
      >
        {props.icon}
      </FloatingActionButton>
    );
  } else if (props.floating && props.secondary) {
    buttonElem = (
      <FloatingActionButton
        label={label}
        onClick={onClick}
        className={`${mainClassName} ${className}`}
        icon={icon}
        disabled={disabled}
        secondary={true}
      />
    );
  } else if (props.iconOnly) {
    buttonElem = (
      <IconButton
        label={label}
        onClick={onClick}
        className={`${mainClassName} ${className}`}
        disabled={disabled}
        icon={icon}
      >
        {props.icon}
      </IconButton>
    );
  } else if (props.raised && props.secondary) {
    buttonElem = (
      <RaisedButton
        label={label}
        onClick={onClick}
        className={`${mainClassName} ${className}`}
        icon={icon}
        disabled={disabled}
        secondary={true}
      />
    );
  } else if (props.raised) {
    buttonElem = (
      <RaisedButton
        label={label}
        className={`${mainClassName} ${className}`}
        onClick={onClick}
        primary={primary}
        secondary={secondary}
        disabled={disabled}
      />
    );
  } else if (props.flat) {
    buttonElem = (
      <FlatButton
        onClick={onClick}
        className={`${mainClassName} ${className}`}
        icon={icon}
        disabled={disabled}
      />
    );
  } else {
    buttonElem = (
      <FlatButton
        onClick={onClick}
        className={`${mainClassName} ${className}`}
        icon={icon}
        disabled={disabled}
      />
    );
  }

  return buttonElem;
}

Button.propTypes = {
  raised: PropTypes.bool,
  floating: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "button",
  raised: false,
  label: "",
  className: mainClassName,
  disabled: false,
  primary: true,
  secondary: false
};
