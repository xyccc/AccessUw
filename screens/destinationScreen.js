import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionButton from '../components/optionbutton';
import AudioPlayer from "react-native-play-audio";

export default class DestinationScreen extends React.Component {
    static navigationOptions = {
        title: "destination screen"
    };
    render() {
        const { params } = this.props.navigation.state;
        AudioPlayer.onEnd(() => {});
        AudioPlayer.prepare('https://students.washington.edu/wfjiang/Audios/destinationScreen.mp3', () => {
            AudioPlayer.play();
        });
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Where do you want to go?</Text>
                <View style={{padding: 20}}/>
                <OptionButton
                    name="Street Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Street Level"
                />
                <View style={{padding: 20}}/>
                <OptionButton
                    name="Bridge Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Bridge Level"
                />
                <View style={{padding: 20}}/>
                <OptionButton
                    name="Platform Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Platform Level"
                />
                <View style={{padding: 20}}/>
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
