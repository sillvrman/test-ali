import React, { useCallback } from 'react';
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    useWindowDimensions,
    View,
} from 'react-native';
import Animated, {
    Easing,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import CircularProgress from './CircularProgress';

const BottomNavigation = () => {
    const { width } = useWindowDimensions();
    const progress = useSharedValue(0);
    const animation = useSharedValue({ width: width - 25, height: 65 });
    const animationStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(animation.value.width, {
                duration: 700,
            }),
            height: withTiming(animation.value.height, {
                duration: 700,
            }),
        };
    });

    const onPress = useCallback(() => {
        progress.value = withTiming(progress.value > 0 ? 0 : 1, {
            duration: !!!progress.value ? 13000 : 0,
            easing: Easing.bezierFn(1, 0.4, 1, 0.1),
        });
    }, []);

    const CIRCLE_LENGTH = 1000; // 2PI*R

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    }));

    return (
        <>
            <TouchableWithoutFeedback
                style={{ zIndex: 5 }}
                onPress={() => {
                    onPress();
                    animation.value.width == 65
                        ? (animation.value = { width: width - 25, height: 65 })
                        : (animation.value = { width: 65, height: 65 });
                }}
            >
                <Animated.View style={[styles.bottomNavigation, animationStyle]}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <View>
                            <Text>A</Text>
                        </View>
                        <View>
                            <Text>A</Text>
                        </View>
                        <View
                            style={{
                                height: 85,
                                width: 85,
                                borderRadius: 85 / 2,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                alignSelf: 'center',
                                zIndex: 2,
                                justifyContent: 'center',
                            }}
                        >
                            <CircularProgress animatedProps={animatedProps} />
                        </View>
                        <View>
                            <Text>A</Text>
                        </View>
                        <View>
                            <Text>A</Text>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        flex: 1,
        backgroundColor: '#d7d6d7',
    },
    bottomNavigation: {
        backgroundColor: 'white',
        shadowColor: '#000',
        zIndex: 2,

        alignItems: 'center',
        justifyContent: 'space-around',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 35,
        alignSelf: 'center',
        borderRadius: 9999,
    },
});
