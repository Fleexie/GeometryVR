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
import SolarPanel from './solarPanel'
import SuperSateliteBody from './superSateliteBody';
class SuperSatelite extends React.Component {
  render() {
    return (
      <View >
        <View>
          <SolarPanel shiftX={0.5}/>
          < SolarPanel shiftX = {
            0
          }
          />
          <SuperSateliteBody />

          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('SuperSatelite', () => SuperSatelite );
