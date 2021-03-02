import React from 'react';
import {
    AppRegistry,
    View,
    Cylinder,
    Sphere
} from 'react-360';



export default class UFO extends React.Component {
    render() {
        return (
            <View>
                <Sphere radius={1} widthSegments={12} heightSegments={12}  style={{ color: 'black', transform: [{ translate: [.7,.7,1] }] }}/>
                <Cylinder radiusTop={2} radiusBottom={2} dimHeight={0.3} segments={24} style={{ color:'darkgrey', transform: [{translate: [.7,.7,1]}]}}/>
            </View>
        );
    }
};
AppRegistry.registerComponent('UFO', () => UFO);
