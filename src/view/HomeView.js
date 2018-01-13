import React, { Component } from 'react';
import { Container, } from 'native-base';
import { HeaderComponent, CameraComponent } from '../components/index';

class HomeView extends Component {
    render() {
        return (
            <Container>

                <HeaderComponent />
                <CameraComponent>
                </CameraComponent>
            </Container>
        )
    }
}

export default HomeView;