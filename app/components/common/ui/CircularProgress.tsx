import BTC from 'assets/svg/bitcoin.svg';
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const BACKGROUND_STROKE_COLOR = '#fff';
const STROKE_COLOR = '#ce3b5d';

const CIRCLE_LENGTH = 1000; // 2PI*R

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircleProgressBar({ animatedProps }: any) {
    return (
        <>
            <Svg
                style={{
                    zIndex: 2,
                    position: 'relative',
                }}
                rotation={-90}
            >
                <Circle
                    cx={85 / 2}
                    cy={85 / 2}
                    r={40}
                    stroke={BACKGROUND_STROKE_COLOR}
                    strokeWidth={0}
                />
                <AnimatedCircle
                    cx={85 / 2}
                    cy={85 / 2}
                    r={35}
                    stroke={STROKE_COLOR}
                    strokeWidth={5}
                    strokeDasharray={CIRCLE_LENGTH}
                    animatedProps={animatedProps}
                    strokeLinecap={'round'}
                />
                <View
                    style={{
                        transform: [{ rotate: '90deg' }],
                        height: 85,
                    }}
                >
                    <BTC
                        width={65}
                        style={{
                            position: 'absolute',
                            alignSelf: 'center',
                        }}
                        height={85}
                    />
                </View>
            </Svg>
        </>
    );
}
