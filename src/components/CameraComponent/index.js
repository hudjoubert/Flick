'use strict';
import React, { Component } from 'react';
import Camera from 'react-native-camera';
import styles from '../styles';
import { View } from 'react-native';
import { Icon } from 'native-base';


class CameraComponent extends Component {
  state = {
    images: [],
    reverseCamera: 'back',
    flash: Camera.constants.FlashMode.off
  }

  render() {

    return (
      <Camera
        ref={(cam) => { this.camera = cam; }}
        style={styles.preview}
        aspect={'fill'}
        type={this.state.reverseCamera}
        orientation={'auto'}
        flashMode={this.state.flash}>
        <View style={styles.CameraBar}>
          <Icon
            name='flash'
            style={styles.capture}
            onPress={this.switchflash} />
          <Icon
            name='radio-button-on'
            style={styles.capture}
            onPress={this.takePicture.bind(this)} />
          <Icon
            name='reverse-camera'
            style={styles.capture}
            onPress={this.switchType} />
        </View>
      </Camera>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => {
        let temp = this.state.images;
        temp.push(data.path);
        this.setState({ images: temp })
        if (temp.length >= 3)
          this.props.nav.navigate('Stories', { images: temp })
      })
      .catch(err => console.error(err));
  }

  switchType = () => {

    if (this.state.reverseCamera === 'back') {
      this.setState({ reverseCamera: 'front' });
    } else {
      this.setState({ reverseCamera: 'back' });
    }
  }
  switchflash = () => {
    if (this.state.flash === Camera.constants.FlashMode.off) {
      this.setState({ flash: Camera.constants.FlashMode.on })
    } else {
      this.setState({ flash: Camera.constants.FlashMode.on })
    }
  }
}

export default CameraComponent;
