import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Box,
    Cylinder,
    Plane,
    Sphere,
    asset
} from 'react-360';

export default class Satelite extends React.Component {
    render() {
        return (
            <View>
                <Sphere radius={2} widthSegments={12} heightSegments={12}  style={{ color: 'green', transform: [{ translate: [.7,.7,1] }] }}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});
AppRegistry.registerComponent('Satelite', () => Satelite);
