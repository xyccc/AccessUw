import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class StartScreen extends React.Component {
    static navigationOptions = {
        title: "start screen"
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Welcome to AccessUw APP</Text>
                <Button
                    onPress={
                        () => navigate("Origin", {})
                    }
                    title="Start navigation"
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
