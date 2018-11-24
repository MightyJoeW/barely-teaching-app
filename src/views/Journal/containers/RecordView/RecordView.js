import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/Button/Button";
import Microphone from "../../components/Microphone/Microphone";
import ReactSimpleTimer from "react-simple-timer";
import { withRouter } from "react-router-dom";

//ICONS
import DeleteIcon from "material-ui/svg-icons/action/delete";
import DoneIcon from "material-ui/svg-icons/action/done";
import MicrophoneIcon from "material-ui/svg-icons/av/mic";

import { styles } from "./styles.scss";

//ACTIONS
import * as audioActionCreators from "../../../../ducks/actions/actions-audios";

class RecordView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      saveRecording: false
    };
  }

  startRecording = () => {
    this.setState({
      recording: true
    });
  };

  deleteRecording = () => {
    this.setState({
      recording: false
    });
  };

  saveRecording = () => {
    this.setState({
      recording: false,
      saveRecording: true
    });
  };

  onStop = recording => {
    const { saveRecording } = this.state;
    const { actions, history } = this.props;

    if (saveRecording) {
      history.push("/journal/recordings");
      actions.audio.saveRecording(recording);
    }
  };

  render() {
    let buttons;
    const { recording } = this.state;

    if (recording) {
      buttons = (
        <div className="buttons">
          <Button
            className="secondary delete"
            iconOnly={true}
            onClick={this.deleteRecording}
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
            onClick={this.saveRecording}
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
          onClick={this.startRecording}
          icon={<MicrophoneIcon />}
        />
      );
    }
    return (
      <div className={styles}>
        <Microphone
          className="mic-icon"
          record={recording}
          onStop={this.onStop}
        />
        <div id="controls">
          <ReactSimpleTimer play={recording} />
          {buttons}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      audio: bindActionCreators(audioActionCreators, dispatch)
    }
  };
}

export default withRouter(connect(null, mapDispatchToProps)(RecordView));
