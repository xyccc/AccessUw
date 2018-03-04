import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionButton from '../components/optionbutton';

export default class OriginScreen extends React.Component {
    static navigationOptions = {
        title: "origin screen"
    };
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Where is your starting location?</Text>
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Bridge Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Bridge Level" to={undefined} ticket = {undefined}
                />
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Street Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Street Level" to={undefined} ticket = {undefined}
                />
                <View style={{padding: 10}}/>
                <OptionButton
                    name="Platform Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Platform Level" to={undefined} ticket = {undefined}
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
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        marginTop: 10,
        fontFamily: 'Courier'
    },
});
