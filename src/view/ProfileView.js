import React, { Component } from 'react';
import { Container } from 'native-base';
import { ProfileComponent, HeaderComponent } from '../components/index';

class ProfileView extends Component {
    state = {}
    render() {
        return (
            <Container>
                <HeaderComponent nav={this.props.navigation} type={'Profile'}/>
                <ProfileComponent />
            </Container>
        );
    }
}

export default ProfileView;