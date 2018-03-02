import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        title: "Information screen"
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style = {styles.container}>
                <Image style={styles.Image}
                    source={require('../assets/image/FloorMap.jpg')}
                    accessibilityLabel = {"Floor Map"}
                    accessible = {true}
                    resizeMode = 'stretch'
                />
                <ScrollView contentContainerStyle={styles.contentContainer}>
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

let {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 21,
        paddingTop: 10
    },
    contentContainer: {
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10
    },
    Image: {
        // alignItems: 'center',
        // marginTop: 50,
        width: width,
        height: 200,
        top: 0
    }
});
