import React, { Component } from 'react';

import { Header, Body, Title, Icon, Left } from 'native-base';

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Icon
                        name='add'
                    />
                </Left>
                <Body>
                    <Title>Flicky</Title>
                </Body>

            </Header>
        );
    }
}

