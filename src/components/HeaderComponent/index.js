import React, { Component } from 'react';

import { Header, Body, Title, Icon, Left, Right } from 'native-base';
import styles from '../styles';

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    <Icon
                        name='add'
                        style={styles.icons}
                    />
                </Left>
                <Body>
                    <Title>Flicky</Title>
                </Body>
                <Right>
                    <Icon name='menu'/>
                </Right>

            </Header>
        );
    }
}

