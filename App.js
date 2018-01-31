import React from 'react';
import { StackNavigator } from 'react-navigation';
import StartScreen from './screens/startScreen';
import OriginScreen from './screens/originScreen';
import DestinationScreen from './screens/destinationScreen';
import DirectionScreen from './screens/directionScreen';

const Navigation = StackNavigator({
    Start: {screen: StartScreen},
    Origin: {screen: OriginScreen},
    Destination: {screen: DestinationScreen},
    Direction: {screen: DirectionScreen}
});

export default Navigation;


