// RecordedItem
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

//RecordedItem styles
import { styles } from "./styles.scss";

export default function RecordedItem(props) {
  const { onClick } = props;
  const { title, blob, startTime, stopTime } = props.item;
  const createdAt = moment(startTime).format("MMMM DD YYYY, h:mm a");
  const totalSize = (blob.size / 1000000).toFixed(2);
  const length = (moment.duration(stopTime - startTime).asSeconds() / 60)
    .toFixed(2)
    .replace(".", ":");

  return (
    <div className={styles} onClick={goToDetailsView.bind(null, onClick)}>
      <div className="item">
        <h2 className="title">{title || "Recording X"}</h2>
        <div className="created-at">{createdAt}</div>
        <div className="length">{length}</div>
        <div className="size">{totalSize} MB</div>
      </div>
    </div>
  );
}

function goToDetailsView(onClick) {
  onClick();
}

RecordedItem.propTypes = {
  item: PropTypes.object.isRequired
};
