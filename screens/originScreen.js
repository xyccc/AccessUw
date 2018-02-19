import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionButton from '../components/optionbutton';
import AudioPlayer from "react-native-play-audio";

export default class OriginScreen extends React.Component {
    static navigationOptions = {
        title: "origin screen"
    };
    render() {

        AudioPlayer.onEnd(() => {});
        AudioPlayer.prepare('https://students.washington.edu/wfjiang/Audios/originScreen.mp3', () => {
            AudioPlayer.play();
        });

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Where is your starting location?</Text>
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Street Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Street Level" to={undefined}
                />
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Bridge Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Bridge Level" to={undefined}
                />
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Platform Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Platform Level" to={undefined}
                />
                <View style={{padding: 10}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
    },
});
