import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Header } from 'react-navigation';
import Video from 'react-native-video';
import AudioPlayer from "react-native-play-audio";

export default class DirectionScreen extends React.Component {
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
        AudioPlayer.prepare(audioUriAddr, () => {
            AudioPlayer.play();
        });

        return (
            <View style={styles.container}>
                <Image
                    source={{uri: gifUriAddr}}
                    style={styles.backgroundVideo}
                />
                <View style={{paddingTop: height - Header.HEIGHT - 70}}>
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
                </View>
                <View style={{paddingTop: height - Header.HEIGHT - 70}}>
                    <TouchableOpacity
                        onPress={
                            () => navigate("Direction2", {start: params.start, end: params.end})
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
    if (props.start === 'Bridge Level') {
        name = 'bridge_to_elevator';
    } else if (props.start === 'Street Level') {
        name = 'street_to_elevator';
    } else if (props.start === 'Platform Level') {
        name = 'train_to_elevator';
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
    },
    title: {
        fontSize: 18,
        color: '#007AFF',
    }
});
