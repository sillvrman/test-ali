import { useFonts } from 'expo-font';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import App from './app/app';
import { OfflineNotice } from './app/components';
import store from './app/store';

const _App = () => {
    const [loaded] = useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) return null;

    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <OfflineNotice />
                <App />
            </Provider>
        </QueryClientProvider>
    );
};

export default _App;
