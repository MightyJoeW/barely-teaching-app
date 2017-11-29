import React, { Component } from "react";
import Button from "../../components/Button/Button";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import DoneIcon from "material-ui/svg-icons/action/done";
import MicrophoneIcon from "material-ui/svg-icons/av/mic";

import { styles } from "./styles.scss";

class RecordView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false
    };
  }

  startRecording = () => {
    this.setState({
      recording: true
    });
  };

  // deleteRecording = () => {
  //   this.setState({
  //     recording: false
  //   });
  // };

  // saveRecording = () => {
  //   this.setState({
  //     recording: false,
  //     saveRecording: true
  //   });
  // };

  // onStop = recording => {
  //   const { saveRecording } = this.state;
  //   const { actions } = this.props;

  //   if (saveRecording) {
  //     actions.audio.saveRecording(recording);
  //   }
  // };

  render() {
    let buttons;
    const { recording } = this.state;

    if (recording) {
      buttons = (
        <div className="buttons">
          <Button
            className="secondary delete"
            iconOnly={true}
            icon={<DeleteIcon />}
          />
          <Button
            secondary={true}
            raised={true}
            floating={true}
            disabled={true}
            icon={<MicrophoneIcon />}
          />
          <Button
            className="secondary save"
            iconOnly={true}
            icon={<DoneIcon />}
          />
        </div>
      );
    } else {
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
    }
    return (
      <div className={styles}>
        <div id="controls">{buttons} </div>
      </div>
    );
  }
}

export default RecordView;
