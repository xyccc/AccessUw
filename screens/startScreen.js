import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PhoneIcon from '../components/phonecall';
import InfoIcon from '../components/infomation';

export default class StartScreen extends React.Component {
    static navigationOptions = {
        title: "start screen"
    };
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={{paddingLeft: width - 80}}>
                    <View>
                        <PhoneIcon/>
                        <InfoIcon navigation={this.props.navigation}/>
                    </View>
                </View>
                <Text style={styles.text}>Welcome to AccessUw APP</Text>
                <TouchableOpacity
                    onPress={
                        () => navigate("Origin", {})
                    }>
                    <View style={styles.button}>
                        <Text style={styles.title}>Start navigation</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 50,
    },
    text: {
        textAlign: 'center',
        fontSize: 28,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 50,
    },
    button: {
        width: width - 80,
        height: height - 450,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: '#007AFF',
    },
});
