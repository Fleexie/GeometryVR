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
import {rotateByQuaternion} from "react-360-web/js/Utils/Math";

export default class Satelite extends React.Component {
    render() {
        return (
            <View>
                {/* Main Parts */}
                <Cylinder radiusTop={0.9} radiusBottom={0.9} dimHeight={5} segments={24} style={{ color:'black', transform: [{translate: [.7,.7,1]}]}}/>
                <Cylinder radiusTop={0.4} radiusBottom={0.4} dimHeight={3} segments={24} style={{ color:'darkblue', transform: [{translate: [-2,.7,1]}]}}/>
                <Cylinder radiusTop={0.4} radiusBottom={0.4} dimHeight={3} segments={24} style={{ color:'darkblue', transform: [{translate: [3,.7,1]}]}}/>

                {/* Small Tubes */}
                <Cylinder radiusTop={0.1} radiusBottom={0.1} dimHeight={2} segments={24} style={{ color:'grey', transform: [{translate: [2,1,1]}, {rotateZ: 90}]}}/>
                <Cylinder radiusTop={0.1} radiusBottom={0.1} dimHeight={2} segments={24} style={{ color:'grey', transform: [{translate: [-1,1,1]}, {rotateZ: 90}]}}/>
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
