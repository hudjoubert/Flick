import React, { Component } from 'react';
import {
    Container,
    Content,
    Thumbnail,
    H1,
    H3,
    Card,
    CardItem,
    Right,
    Left,
    Text,
    Body,
    Button,
    Icon
} from 'native-base';
import styles from '../styles'


class ProfileComponent extends Component {
    render() {
        return (
            <Content >
                <Body>
                    <Thumbnail style={styles.thumbnail} large square source={require('../../images/luffy-avatar.png')} />
                    <H1>Nome</H1>
                </Body>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail small rounded source={require('../../images/luffy-avatar.png')} />
                        </Left>
                        <H3>My Story</H3>
                        <Body>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name="images" />
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default ProfileComponent;