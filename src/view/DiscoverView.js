import React, { Component } from 'react';
import { Container } from 'native-base';
import { StoryComponent, HeaderComponent } from '../components/index';

class DiscoverView extends Component {
    state = {}
    render() {
        return (
            <Container>
                <HeaderComponent nav={this.props.navigation} type={'Discover'}/>
                <StoryComponent />
            </Container>
        );
    }
}

export default DiscoverView;