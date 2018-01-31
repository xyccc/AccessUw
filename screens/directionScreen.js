import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DirectionScreen extends React.Component {
    static navigationOptions = {
        title: "direction screen"
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>The route is from {params.start} to {params.end}.</Text>
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
