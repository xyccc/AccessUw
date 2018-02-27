import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        title: "Information screen"
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Fill with Infomation!</Text>
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
    text: {
        textAlign: 'center',
        fontSize: 28,
    },
});
