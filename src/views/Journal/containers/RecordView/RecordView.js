import React from "react";
import Button from "../../components/Button/Button";
import MicrophoneIcon from "material-ui/svg-icons/av/mic";

import { styles } from "./styles.scss";

class RecordView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttons;
    buttons = (
      <Button
        className="btn"
        secondary={true}
        raised={true}
        floating={true}
        onTouchTap={this.startRecording}
        icon={<MicrophoneIcon />}
      />
    );
    return (
      <div className={styles}>
        <div id="controls">{buttons}</div>
      </div>
    );
  }
}

export default RecordView;
