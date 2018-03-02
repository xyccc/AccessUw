import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import OptionButton from '../components/optionbutton';

export default class TicketScreen extends React.Component {
    static navigationOptions = {
        title: "ticket screen"
    };
    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <OptionButton
                    name="I need directions to ticket booth" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to={params.end} ticket={true}
                />
                <View style={{padding: 10}}/>
                <OptionButton
                    name="I don't need directions to ticket booth" nextPage="Direction" navigation={this.props.navigation}
                    from={params.start} to={params.end} ticket={false}
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