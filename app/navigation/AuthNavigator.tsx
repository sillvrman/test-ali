import { Home } from '@app/screens';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Animated, Easing } from 'react-native';

import { routes } from './routes';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 1,
        restSpeedThreshold: 1,
    },
};

const closeConfig = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear,
    },
};

const forFade = ({ current, next }: any) => {
    const opacity = Animated.add(current.progress, next ? next.progress : 0).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
    };
};

const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{ headerStyleInterpolator: forFade, headerShown: false }}>
        <Stack.Screen name={routes.HOME} component={Home} />
    </Stack.Navigator>
);

export default AuthNavigator;
