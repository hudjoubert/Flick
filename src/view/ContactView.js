import React, { Component } from 'react';
import { Container } from 'native-base';
import { ContactComponent, HeaderComponent } from '../components/index';

class ContactView extends Component {
    state = {  }
    render() {
        return (
            <Container>
                <HeaderComponent teste={this.props.navigation} type={'Contact'}/>
                <ContactComponent/>
            </Container>
        );
    }
}

export default ContactView;