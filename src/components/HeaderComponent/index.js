import React, { Component } from 'react';

import { Header, Body, Title, Icon, Left, Right, Button } from 'native-base';
import styles from '../styles';

export default class HeaderComponent extends Component {


    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    {this.props.type === 'Camera' && (
                        <Button transparent onPress={() => this.props.teste.navigate('Discover')}>
                            <Icon
                                name='images'
                                style={styles.icons}
                            />
                        </Button>
                    )}
                    {this.props.type === 'Contact' && (
                        <Button transparent onPress={() => this.props.teste.navigate('Home')}>
                            <Icon
                                name='camera'
                                style={styles.icons}
                            />
                        </Button>
                    )}
                </Left>
                <Body>
                    <Title>Flicky</Title>
                </Body>
                <Right>
                    {this.props.type === 'Camera' && (
                        <Button transparent onPress={() => this.props.teste.navigate('Contact')}>
                            <Icon
                                name='contacts'
                                style={styles.icons} />
                        </Button>
                    )}

                    {this.props.type === 'Contact' && (
                        <Button transparent onPress={() => this.props.teste.navigate('Profile')}>
                            <Icon
                                name='contact'
                                style={styles.icons} />
                        </Button>
                    )}
                </Right>

            </Header>
        );
    }
}

