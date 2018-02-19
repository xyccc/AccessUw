import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Video from 'react-native-video';
import AudioPlayer from "react-native-play-audio";

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
        let gifUriAddr = "https://students.washington.edu/wfjiang/Gifs/" + matchVideoName(params) + ".gif";
        let audioUriAddr = 'https://students.washington.edu/wfjiang/Audios/' + matchVideoName(params) + '.mp3';

        AudioPlayer.onEnd(() => {});
        AudioPlayer.prepare('https://students.washington.edu/wfjiang/Audios/push_platform_button.mp3', () => {
            AudioPlayer.play();
        });
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: gifUriAddr}}
                    style={styles.backgroundVideo}
                />
                {Platform.OS === 'android' &&
                <Video source={{uri: uriAddr, mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
                       rate={1.0}                   // 0 is paused, 1 is normal.
                       volume={1.0}                 // 0 is muted, 1 is normal.
                       muted={true}                // Mutes the audio entirely.
                       paused={false}               // Pauses playback entirely.
                       resizeMode="cover"           // Fill the whole screen at aspect ratio.
                       repeat={true}                // Repeat forever.
                       onLoadStart={this.loadStart} // Callback when video starts to load
                       onLoad={this.setDuration}    // Callback when video loads
                       onProgress={this.setTime}    // Callback every ~250ms with currentTime
                       onEnd={this.onEnd}           // Callback when playback finishes
                       onError={this.videoError}    // Callback when video cannot be loaded
                       style={styles.backgroundVideo} />
                }
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
                        () => navigate("Direction3", {start: params.start, end: params.end})
                    }>
                    <View style={styles.button}>
                        <Text style={styles.title}>Next Step</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

function matchVideoName(props) {
    let name = '';
    if (props.end === 'Bridge Level') {
        name = 'push_bridge_button';
    } else if (props.end === 'Street Level') {
        name = 'push_street_button';
    } else if (props.end === 'Platform Level') {
        name = 'push_platform_button';
    }
    return name;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
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
        marginTop: 600
    },
    title: {
        fontSize: 18,
        color: '#007AFF',
    }
});
