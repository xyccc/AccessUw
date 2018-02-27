import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default class InfoIcon extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <TouchableOpacity
                onPress={
                    () => navigate("Info")
                }>
                <Image
                    source={require('../Icons/info.png')}
                    accessibilityLabel={"Information Icon"}
                    accessible={true}
                />
            </TouchableOpacity>
        );
    }
}
