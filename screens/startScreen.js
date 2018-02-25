import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AudioPlayer from 'react-native-play-audio';

export default class StartScreen extends React.Component {
    static navigationOptions = {
        title: "start screen"
    };
    render() {
        const {navigate} = this.props.navigation;

        AudioPlayer.prepare('https://students.washington.edu/wfjiang/Audios/start_screen.mp3', () => {});
        AudioPlayer.play();
        AudioPlayer.onEnd(() => {});

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to AccessUw APP</Text>
                <TouchableOpacity
                    onPress={
                        () => {
                            AudioPlayer.stop();
                            navigate("Origin", {});
                        }
                    }>
                    <View style={styles.button}>
                        <Text style={styles.title}>Start navigation</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 80,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 50,
    },
    text: {
        textAlign: 'center',
        fontSize: 28,
        paddingBottom: 50,
    },
    button: {
        width: 250,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: '#007AFF',
    }
});
