import React, { Component } from 'react';

import { Header, Body, Title, Icon, Left, Right, Button } from 'native-base';
import styles from '../styles';

export default class HeaderComponent extends Component {


    render() {
        console.log(this.props);

        return (
            <Header style={styles.header}>
                <Left>
                    {this.props.type === 'Camera' && (
                        <Button transparent onPress={() => this.props.teste.navigate('Contact')}>
                            <Icon
                                name='add'
                                style={styles.icons}
                            />
                        </Button>
                    )}
                    {this.props.type === 'Contact' && (
                        <Button transparent onPress={() => this.props.teste.navigate('Home')}>
                            <Icon
                                name='arrow-back'
                                style={styles.icons}
                            />
                        </Button>
                    )}
                </Left>
                <Body>
                    <Title>Flicky</Title>
                </Body>
                <Right>
                    <Icon name='menu' />
                </Right>

            </Header>
        );
    }
}

