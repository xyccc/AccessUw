import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        title: "Information screen"
    };

    render() {
        return (
            <View style = {styles.container}>
                <Image style={styles.Image}
                    source={require('../assets/image/FloorMap.jpg')}
                    accessibilityLabel = {"Floor Map"}
                    accessible = {true}
                    resizeMode = 'stretch'
                />
                <ScrollView style={styles.scroll}>
                    <Text style={styles.text}>
                        The University of Washington Link Light Rail station has three different levels.{"\n"}{"\n"}
                        The Bridge level is the topmost level of the station, and it includes a ticket vending machine and an uncovered walkway to the University of Washington.{"\n"}{"\n"}
	                    From the street level, you can access Husky Stadium and Montlake Boulevard. There is a ticket vending machine on the street level.{"\n"}{"\n"}
	                    The light rail arrives to and departs from the platform level.{"\n"}{"\n"}
                        This station is the end of the line, so all trains departing from this station are southbound. All trains departing from this station are bound for Capitol Hill, downtown Seattle, and SeaTac Airport.
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff0f5',
    },
    text: {
        fontSize: 21,
        padding: 20,
        fontFamily: 'Verdana'
    },
    Image: {
        width: width - 20,
        height: 194,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    scroll: {
        backgroundColor: '#fff0f5'
    }
});
