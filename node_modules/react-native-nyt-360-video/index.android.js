import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, requireNativeComponent, NativeModules, View, Image } from 'react-native';

export default class Nyt360Video extends Component {
  constructor(props){
    super(props);

    this.state = {
      rotating: false
    }

    this.counter = 0;
    this.countTimer;
  }

  static propTypes = {
    ...View.propTypes,
    source: PropTypes.shape({
      uri: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
    volume: PropTypes.number,
    displayMode: PropTypes.string,
    enableFullscreenButton: PropTypes.bool,
    enableCardboardButton: PropTypes.bool,
    enableInfoButton: PropTypes.bool,
    enableTouchTracking: PropTypes.bool,
    hidesTransitionView: PropTypes.bool,
    paused: PropTypes.bool,
    seekTo: PropTypes.number,
    suspended: PropTypes.bool,
    transitioning: PropTypes.bool,
    progressUpdateInterval: PropTypes.number,
    on360VideoLoad: PropTypes.func,
    on360VideoError: PropTypes.func,
    on360NewFrame: PropTypes.func,
    on360VideoEnd: PropTypes.func,
    on360VideoPress: PropTypes.func,
    on360DisplayModeChanged: PropTypes.func
  }

  componentWillMount(){
    this.countTimer = setInterval(() => {
      if(!this.props.paused){
        this.counter += 250;
      }
      if(this.props.onProgress){
        this.props.onProgress({currentTime: this.counter});
      }
    }, 250);
  }

  _onLoad = (event) => {
    if (this.props.onLoad) {
      this.props.onLoad(event.nativeEvent);
    }
  };

  _onEnd = (event) => {
    if (this.props.onEnd) {
      this.props.onEnd(event.nativeEvent);
    }
  };

  _onPress = (event) => {
    if (this.props.onPress) {
      this.props.onPress(event.nativeEvent);
    }
  };

  _onError = (event) => {
    if (this.props.onError) {
      this.props.onError(event.nativeEvent);
    }
  };

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  seek(time){
    this.counter = time;
    this.setNativeProps({seekTo: time});
  }

  rotate(){
    /*

      This probably isn't an ideal solution, but transitioning from portrait to landscape and back
      causes the video to be sideways. In order to reorient the video to match the orientation, we 
      remove the video for a frame and force it to re-render and seek to the previous time

    */
    this.setNativeProps({suspended: true});
    this.setState({rotating: true}, () => {
      this.setState({rotating: false}, () => {
        this._root.setNativeProps({seekTo: this.counter});
      });
    });
  }

  componentWillUnmount(){
    //android view will not automatically remove view, so we set suspended to true to garbage collect the view
    this.setNativeProps({suspended: true});
    clearTimeout(this.countTimer);
  }

  _assignRoot(component){
    this._root = component;
  }

  render(){

    const nativeProps = Object.assign({}, this.props);
    Object.assign(nativeProps, {
      on360VideoLoad: this._onLoad,
      on360VideoError: this._onError,
      on360VideoEnd: this._onEnd,
      on360VideoPress: this._onPress,
    });

    return !this.state.rotating ? (
      <RNNyt360Video
        ref={ref => this._root = ref}
        {...nativeProps} />
    ) : null
  }

}


const RNNyt360Video = requireNativeComponent('RNNyt360Video', Nyt360Video, {nativeOnly: {onChange: true}});
