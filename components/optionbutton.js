import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Header } from 'react-navigation';

export default class OptionButton extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { from, to, ticket, nextPage } = this.props;
        let disableButton = from === to;
        let titleCol = styles.title;
        if (disableButton)
            titleCol = styles.disabled;
        return (
            <TouchableOpacity disabled={disableButton}
                onPress={
                    () => navigate(nextPage, {start: from, end: to, ticket : ticket})
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
        backgroundColor: '#F2f3f4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    title: {
        fontSize: 28,
        color: '#007AFF',
        fontFamily: 'Futura',
        marginLeft: 5,
        marginRight: 5
    },
    disabled: {
        fontSize: 28,
        color: '#909497',
        fontFamily: 'Futura'
    }
});

