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
                <View style={{padding: 20}}/>
                <OptionButton
                    name="Street Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Street Level" to={undefined}
                />
                <View style={{padding: 20}}/>
                <OptionButton
                    name="Bridge Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Bridge Level" to={undefined}
                />
                <View style={{padding: 20}}/>
                <OptionButton
                    name="Platform Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Platform Level" to={undefined}
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
