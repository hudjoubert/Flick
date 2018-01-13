'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Icon, Container, Header, Left, Body, Right } from 'native-base';
import Camera from 'react-native-camera';
import styles from '../styles';


class CameraComponent extends Component {
  render() {
    return (
      <Container>
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={styles.preview}
          aspect={'fill'}
          type={'back'}
          orientation={'auto'}>
          <Icon
            name='radio-button-on'
            style={styles.capture}
            onPress={this.takePicture.bind(this)} />
        </Camera>
      </Container>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}


export default CameraComponent;