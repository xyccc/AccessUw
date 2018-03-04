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
                <Text style={styles.text} accessibilityLabel={"Welcome to AccessU Dub APP"}>Welcome to AccessUW APP</Text>
                <Text style={styles.intro}>
                Phone icon: call Link Station hotline.{"\n"}
                Info icon: general information about the station.
                </Text>
                <TouchableOpacity
                    onPress={
                        () => navigate("Origin", {})
                    }>
                    <View style={styles.button}>
                        <Text style={styles.title}>Start Navigation</Text>
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
        backgroundColor: '#9370DB',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 50,
    },
    text: {
        textAlign: 'center',
        fontSize: 34,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 30,
        fontWeight: "bold",
        color: '#ffd700',
        fontFamily: 'Palatino-Bold'
    },
    button: {
        width: width - 80,
        height: height - 450,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#fff',
        backgroundColor: '#F2F3F4',
        borderRadius: 20
    },
    title: {
        fontSize: 32,
        color: '#007AFF',
        fontFamily: 'Menlo'
    },
    intro: {
        fontSize: 15,
        color: "#fff",
        textAlign: 'left',
        paddingBottom: 14
    }
});
