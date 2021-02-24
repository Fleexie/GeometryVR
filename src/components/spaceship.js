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
import GeometryVR from "../../index";
import Entity from 'Entity';

export default class Spaceship extends React.Component {
    render() {
        return (
            <View>
                {/*<View>*/}
                {/*    <Cylinder radiusTop={0.8} radiusBottom={0.8} dimHeight={2} segments={12} style={{ color:'orange', transform: [{translate: [0, 0, 0]}]}}/>*/}
                {/*    <Sphere radius={0.8} widthSegments={12} heightSegments={12}  style={{ color: 'orange', transform: [{ translate: [0,1,0] }] }}/>*/}
                {/*</View>*/}
                {/*<View>*/}
                {/*    <Cylinder radiusTop={0.5} radiusBottom={0.5} dimHeight={2} segments={12} style={{ color:'white', transform: [{translate: [.7, -.3, 1]}]}}/>*/}
                {/*    <Sphere radius={0.5} widthSegments={12} heightSegments={12}  style={{ color: 'white', transform: [{ translate: [.7,.7,1] }] }}/>*/}
                {/*</View>*/}
                {/*<View>*/}
                {/*    <Cylinder radiusTop={0.2} radiusBottom={0.2} dimHeight={2} segments={6} style={{ color:'white', transform: [{translate: [-.3, -.3, .7]}]}}/>*/}
                {/*    <Sphere radius={0.2} widthSegments={6} heightSegments={6}  style={{ color: 'white', transform: [{ translate: [-.3,.7,.7] }] }}/>*/}
                {/*</View>*/}

                <View>
                    <Cylinder radiusTop={2} radiusBottom={2} dimHeight={5} segments={12} style={{ color:'white', transform: [{translate: [.7, -.3, 1]}]}}/>
                    <Sphere radius={2} widthSegments={12} heightSegments={12}  style={{ color: 'white', transform: [{ translate: [.7,.7,1] }] }}/>
                </View>
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
AppRegistry.registerComponent('Spaceship', () => Spaceship);
