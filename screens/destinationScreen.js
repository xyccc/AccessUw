import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionButton from '../components/optionbutton';

export default class DestinationScreen extends React.Component {
    static navigationOptions = {
        title: "destination screen"
    };
    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Where do you want to go?</Text>
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Bridge Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Bridge Level" ticket = {false}
                />
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Street Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Street Level" ticket = {false}
                />
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Platform Level" nextPage="Ticket" navigation={this.props.navigation}
                    from={params.start} to="Platform Level" ticket = {undefined}
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
        fontSize: 24,
        fontFamily: 'Courier'
        
    },
});
