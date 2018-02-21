import React from 'react';
import {Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class OptionButton extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { from, to, nextPage } = this.props;
        return (
            <TouchableOpacity
                onPress={
                    () => navigate(nextPage, {start: from, end: to})
                }>
                <View style={styles.button}>
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}

let {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        width: 340,
        height: (height - 64 - 77 - 80) / 3,
        backgroundColor: '#F2F3F4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#007AFF',
    }
});

