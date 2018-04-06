import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/Video';
import Title from '../components/Title';
import PlayPause from '../components/PlayPause';
import Timer from '../components/Timer';
import VideoPlayerControls from '../components/VideoPlayerControls';
import ProgessBar from '../components/ProgressBar';
export default class VideoPlayerContainer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0
  }

  togglePlayPause = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })

  }
  changeProgress = event =>{
    
    this.video.currentTime = event.target.value
  }
  render() {
    return (
      <VideoPlayerLayout >
        <Title title="Video !!!" />
        <Video
          isPaused={this.state.pause}
          autoPlay={this.props.autoPlay}
          handleLoadedMetadata={this.handleLoadedMetadata}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleTimeUpdate={this.handleTimeUpdate}
        />

        <VideoPlayerControls>

          <PlayPause
            isPaused={this.state.pause}
            changePlayPause={this.togglePlayPause} />
          <ProgessBar changeProgress={this.changeProgress} duration={this.state.duration} value={this.state.currentTime} />
          <Timer currentTime={this.state.currentTime} duration={this.state.duration} />

        </VideoPlayerControls>
      </VideoPlayerLayout >



    )
  }
}