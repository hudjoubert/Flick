import React, { Component } from 'react';
import { Container } from 'native-base';
import { StoryComponent, HeaderComponent } from '../components/index';

class DiscoverView extends Component {
    state = {}
    render() {
        return (
            <Container>
                <HeaderComponent />
                <StoryComponent />
            </Container>
        );
    }
}

export default DiscoverView;