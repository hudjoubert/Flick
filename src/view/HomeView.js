import React, { Component } from 'react';
import { Container, } from 'native-base';
import { HeaderComponent, CameraComponent, ProfileComponent, ContactComponent } from '../components/index';

class HomeView extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <HeaderComponent nav={this.props.navigation} type={'Camera'} />
                <CameraComponent nav={this.props.navigation} />
            </Container>
        )
    }
}

export default HomeView;