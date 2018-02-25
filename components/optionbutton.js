import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Header } from 'react-navigation';

export default class OptionButton extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { from, to, nextPage } = this.props;
        const { audioPlayer } = this.props;
        let disableButton = from === to;
        let titleCol = styles.title;
        if (disableButton)
            titleCol = styles.disabled;
        return (
            <TouchableOpacity disabled={disableButton}
                onPress={
                    () => {
                        audioPlayer.stop();
                        navigate(nextPage, {start: from, end: to});
                    }
                }>
                <View style={styles.button}>
                    <Text style={titleCol}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

let {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        width: 340,
        height: (height - Header.HEIGHT - 77 - 80) / 3,
        backgroundColor: '#F2F3F4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#007AFF',
    },
    disabled: {
        fontSize: 28,
        color: '#909497',
    }
});

