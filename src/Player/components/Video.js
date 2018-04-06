
import React, { Component } from 'react';
import './Video.css';
export default class Video extends Component {

  togglePlay = () => {
    if (this.props.isPaused) {
      this.video.play()

    } else {
      this.video.pause()

    }

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isPaused != this.props.isPaused) {
      this.togglePlay()
    }
  }
  setRef = element => {
    this.video = element;
  }
  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate

    } = this.props;
    return (
      <video src={this.props.src}
        autoPlay={this.props.autoPlay}
        ref={this.setRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}

      //controls
      />
    )
  }

}
