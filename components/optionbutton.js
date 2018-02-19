import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const styles = StyleSheet.create({
    button: {
        width: 320,
        height: 170,
        backgroundColor: '#F2F3F4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#007AFF',
    }
});

