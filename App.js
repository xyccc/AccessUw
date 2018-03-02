import React from 'react';
import { StackNavigator } from 'react-navigation';
import StartScreen from './screens/startScreen';
import OriginScreen from './screens/originScreen';
import DestinationScreen from './screens/destinationScreen';
import DirectionScreen from './screens/directionScreen';
import DirectionScreen2 from './screens/directionScreen2';
import DirectionScreen3 from './screens/directionScreen3';
import InfoScreen from './screens/infoScreen';
import TicketScreen from './screens/ticketScreen';
import DirectionTicket from './screens/directionTicket'

const Navigation = StackNavigator({
    Start: {screen: StartScreen},
    Origin: {screen: OriginScreen},
    Destination: {screen: DestinationScreen},
    Direction: {screen: DirectionScreen},
    Direction2: {screen: DirectionScreen2},
    Direction3: {screen: DirectionScreen3},
    Info: {screen: InfoScreen},
    Ticket: {screen: TicketScreen},
    DirectionTicket: {screen: DirectionTicket}
});

export default Navigation;


