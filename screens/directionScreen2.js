import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { Header } from "react-navigation";
import PhoneIcon from '../components/phonecall';
import InfoIcon from '../components/infomation';

export default class DirectionScreen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVideoPaused: false};
    }

    static navigationOptions = {
        title: "direction screen"
    };

    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        let uriAddr = "https://students.washington.edu/wfjiang/Videos2/" + matchVideoName(params) + ".mp4";

        return (
            <View>
                <View style={{height: height - 70 - Header.HEIGHT}}>
                    {Platform.OS === 'ios' &&
                    <Video source={{uri: uriAddr}}   // Can be a URL or a local file.
                           ref={(ref) => {
                               this.player = ref
                           }}                                      // Store reference
                           rate={1.0}                              // 0 is paused, 1 is normal.
                           volume={1.0}                            // 0 is muted, 1 is normal.
                           muted={false}                            // Mutes the audio entirely.
                           paused={this.state.isVideoPaused}       // Pauses playback entirely.
                           resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                           repeat={false}                          // Repeat forever.
                           playInBackground={false}                // Audio continues to play when app entering background.
                           playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                           ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                           progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                           onLoadStart={this.loadStart}            // Callback when video starts to load
                           onLoad={this.setDuration}               // Callback when video loads
                           onProgress={this.setTime}               // Callback every ~250ms with currentTime
                           onEnd={() => this.setState({isVideoPaused: true})}                          // Callback when playback finishes
                           onError={this.videoError}               // Callback when video cannot be loaded
                           onBuffer={this.onBuffer}                // Callback when remote video is buffering
                           onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                           style={styles.backgroundVideo}
                    />
                    }
                    {Platform.OS === 'android' &&
                    <Video source={{uri: uriAddr, mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
                           rate={1.0}                   // 0 is paused, 1 is normal.
                           volume={1.0}                 // 0 is muted, 1 is normal.
                           muted={false}                // Mutes the audio entirely.
                           paused={this.state.isVideoPaused}               // Pauses playback entirely.
                           resizeMode="cover"           // Fill the whole screen at aspect ratio.
                           repeat={false}                // Repeat forever.
                           onLoadStart={this.loadStart} // Callback when video starts to load
                           onLoad={this.setDuration}    // Callback when video loads
                           onProgress={this.setTime}    // Callback every ~250ms with currentTime
                           onEnd={() => this.setState({isVideoPaused: true})}           // Callback when playback finishes
                           onError={this.videoError}    // Callback when video cannot be loaded
                           style={styles.backgroundVideo} />
                    }
                </View>
                <View style={{position: 'absolute', top: 10, right: 5}}>
                    <PhoneIcon/>
                    <InfoIcon navigation={this.props.navigation}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                this.player && this.player.seek(0);
                                this.setState({isVideoPaused: false});
                            }
                        }>
                        <View style={styles.button}>
                            <Text style={styles.title}>Play Again</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={
                            () => {
                                this.setState({isVideoPaused: true});
                                navigate("Direction3", {start: params.start, end: params.end});
                            }
                        }>
                        <View style={styles.button}>
                            <Text style={styles.title}>Next Step</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

let {height} = Dimensions.get('window');

function matchVideoName(props) {
    let name = '';
    if (props.end === 'Bridge Level') {
        name = 'push_bridge_button_as';
    } else if (props.end === 'Street Level') {
        name = 'push_street_button_as';
    } else if (props.end === 'Platform Level') {
        name = 'push_platform_as';
    }
    return name;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    backgroundVideo: {
        position: 'absolute',
        top: - Header.HEIGHT - 40,
        left: 0,
        bottom: 0,
        right: 0,
    },
    button: {
        width: 150,
        height: 70,
        backgroundColor: '#F2F3F4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#007AFF',
        fontFamily: 'Menlo'
    }
});
