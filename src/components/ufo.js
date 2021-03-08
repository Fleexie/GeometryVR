import React from 'react';
import {
    AppRegistry,
    View,
    Cylinder,
    Sphere,
    Box,
    asset
} from 'react-360';



export default class UFO extends React.Component {

    constructor(props) {
        super(props);

        let axisRotate = 1;
        this.state = {
            rotation: axisRotate,
            diodeColor: true,
            green: 'green',
            red: 'red'
        }
    }

    render() {
        return (
            // Main.
            // Rotates the whole element.
            <View style={{ transform: [{rotateY: this.state.rotation}]}}>
                {/* First Placeholder - Moved away from center to rotate with Main & To rotate around its self - Center Graphics */}
                <View style={{ transform: [{translate: [52,0,0]}, {rotateY: this.state.rotation}, {rotateZ: 20}]}}>
                    <Sphere
                        radius={1}
                        widthSegments={12}
                        heightSegments={12}
                        texture={asset('../../static_assets/spacecraft.jpg')}
                        style={{ transform: [{ translate: [0,0,0] }, {rotateX: this.state.rotation}] }}/>
                    {/* Plate Placeholder - Plate Graphics - Adds rotate around the center of First Placeholder */}
                    <View style={{ transform: [{translate: [0,0,0]}, {rotateY: this.state.rotation}]}}>
                        <Cylinder radiusTop={2} radiusBottom={2} dimHeight={0.3} segments={24} style={{ color:'black', transform: [{translate: [0,0,0]}]}}/>
                        {/* Dots - Placed on the edge with color changes */}
                        <View>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [-2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [0,0,2] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [0,0,-2] }] }}/>
                        </View>
                        {/* Dots(1) - Rotated by 45 degree to make double cross */}
                        <View style={{transform: [{rotateY: 45}]}}>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [-2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [0,0,2] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [0,0,-2] }] }}/>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
    componentDidMount() {
        // Rotation Controller
        this.rotationController();

        // Diode Controller
        this.diodeController();
    }
    rotationController(){
        this.rotation = setInterval(() => {
            this.setState({rotation: this.state.rotation + 0.3});
        }, 20);
    }
    diodeController(){
        this.diodeColor = setInterval(() => {
            this.state.diodeColor = !this.state.diodeColor;

            if (this.state.diodeColor){
                this.setState({green: 'lightgreen', red: 'darkred'});
            }
            else{
                this.setState({ green: 'green', red: 'red'})
            }
        }, 500)
    }
};
AppRegistry.registerComponent('UFO', () => UFO);
