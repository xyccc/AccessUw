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
                <Text>Where the starting location is?</Text>
                <OptionButton
                    name="Street Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Street Level" to={undefined}
                />
                <OptionButton
                    name="Bridge Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Bridge Level" to={undefined}
                />
                <OptionButton
                    name="Platform Level" nextPage="Destination" navigation={this.props.navigation}
                    from="Platform Level" to={undefined}
                />
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
});
