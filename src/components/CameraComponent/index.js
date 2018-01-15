'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import { Icon, Container, Header, Left, Body, Right, Thumbnail, Button, Text } from 'native-base';
import Camera from 'react-native-camera';
import styles from '../styles';


class CameraComponent extends Component {
  state = {
    images: []

  }
  render() {
    return ( 
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
}


export default CameraComponent;