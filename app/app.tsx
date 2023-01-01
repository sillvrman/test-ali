import 'react-native-gesture-handler';

import { AuthNavigator } from '@app/navigation';
import navigationTheme from '@app/navigation/navigationTheme';
import { navigationRef } from '@app/navigation/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
            <SafeAreaProvider>
                <AuthNavigator />
            </SafeAreaProvider>
        </NavigationContainer>
    );
};

export default App;
