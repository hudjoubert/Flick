import React, { Component } from 'react';
import { Container, } from 'native-base';
import { HeaderComponent, CameraComponent, ProfileComponent, ContactComponent } from '../components/index';

class HomeView extends Component {

    static navigationOptions = {
        header: null
    }
    render() {
        console.log(this.props);
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <HeaderComponent teste={this.props.navigation} type={'Camera'} />
                <CameraComponent />
            </Container>
        )
    }
}

export default HomeView;