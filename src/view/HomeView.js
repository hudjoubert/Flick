import React, { Component } from 'react';
import { Container, } from 'native-base';
import { HeaderComponent } from '../components/index';

class HomeView extends Component {
    render() {
        return (
            <Container>
                <HeaderComponent></HeaderComponent>
            </Container>
        )
    }
}

export default HomeView;