import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';

const FocusedStatusBar = (props: StatusBarProps | Readonly<StatusBarProps>) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
