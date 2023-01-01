import { ButtomNavigation } from '@app/components/common';
import AppBlock from '@app/components/common/ui/AppBlock';
import { posts } from 'constants/dummy';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue } from 'react-native-reanimated';

import { getFormatedDate } from '../../utils/getDate';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const App = () => {
    const isShowingDetails = useSharedValue(false);

    const animatedProps = useAnimatedProps(() => {
        return { scrollEnabled: !isShowingDetails.value };
    });

    const onShowingStateChanged = () => {
        'worklet';
        isShowingDetails.value = !isShowingDetails.value;
    };

    return (
        <>
            <AnimatedScrollView
                style={styles.container}
                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 45 }}
                animatedProps={animatedProps}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
            >
                <StatusBar hidden />
                <Text style={styles.date}>{getFormatedDate()}</Text>
                <Text style={styles.title}>Ali Askari</Text>

                {posts.map((post, index) => (
                    <AppBlock
                        key={index}
                        post={post}
                        isShowingDetails={isShowingDetails}
                        showingStateChanged={onShowingStateChanged}
                    />
                ))}
            </AnimatedScrollView>
            <ButtomNavigation />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfcfcf',
    },

    date: {
        color: '#989898',
        fontSize: 13,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 3,
    },
    title: {
        color: '#000',
        fontSize: 36,
        fontWeight: '700',
        marginBottom: 10,
    },
});

export default App;
