import React from 'react';
import { View, StyleSheet } from 'react-native';

import Svg, {
    Circle,
    Text,
    Image,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

const SVGIcon = ({ iconTitle }) => {
    let iconText = iconTitle.substring(0, 5);
    if (iconTitle.split(' ').length >= 2) {
        const first = iconTitle[0].substring(0, 1);
        const second = iconTitle[1].substring(0, 1);
        iconText = first.toUpperCase() + second.toUpperCase();
    }
    return (
        <View styles={styles.container}>
            <Svg height="100%" width="100%" >
                <Circle cx="50" cy="50" r="40" strokeWidth="8" stroke="gray" fill="#ffffcc" />
                <Circle
                    cx="90"
                    cy="60"
                    r="40"
                    strokeWidth="8"
                    stroke="#a3a3a3"
                    fill="white"
                />
                <Text
                    fill="black"
                    stroke="#f2d9e6"
                    fontSize="30"
                    fontWeight="bold"
                    x="89"
                    y="75"
                    textAnchor="middle">
                    {iconText}
                </Text>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flex: 1,
        margin: 8,
        borderWidth: 1,
    }
});

export default SVGIcon;

