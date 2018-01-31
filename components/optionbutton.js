import React from 'react';
import { Button } from 'react-native';

export default class OptionButton extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { from, to, nextPage } = this.props;
        return (
            <Button
                onPress={
                    () => navigate(nextPage, {start: from, end: to})
                }
                title={this.props.name}
                color="#0000ff"
            />
        );
    }
}