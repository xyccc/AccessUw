import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const util = require('util');
const v = require('react-native-nyt-360-video');
import Video from "react-native-video";

export default class DirectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false};
    }


    static navigationOptions = {
        title: "direction screen"
    };

    render() {
        let nytv = v.Nyt360Video;
        // console.log(util.inspect(this, false, null));
        console.log("state" + util.inspect(this.state, false, null));
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>The route is from {params.start} to {params.end}.</Text>
                <Video
                    repeat
                    resizeMode='cover'
                    source={{uri: 'http://students.washington.edu/wfjiang/R0010017.MP4'}}
                    style={styles.backgroundVideo}
                />

            </View>
        );
    }
}

// this.player.presentFullscreenPlayer();
// this.player.seek(0);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
