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
                <Text>Where do you want to get to?</Text>
                <OptionButton
                    name="Street Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Street Level"
                />
                <OptionButton
                    name="Bridge Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Bridge Level"
                />
                <OptionButton
                    name="Platform Level" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to="Platform Level"
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
