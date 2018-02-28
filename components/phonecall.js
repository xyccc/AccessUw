import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call';

export default class PhoneIcon extends React.Component {
    render() {
        const args = {
            number: '8888896368',  // should be phone number of transit station
        };

        return (
            <TouchableOpacity
                onPress={
                    () => call(args).catch(() => null)
                }>
                <Image
                    source={require('../Icons/call.png')}
                    accessibilityLabel={"Call For Help"}
                    accessible={true}
                />
            </TouchableOpacity>
        );
    }
}
