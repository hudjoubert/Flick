import React, { Component } from 'react';
import styles from '../styles'
import {
    Content,
    Thumbnail,
    H1,
    H3,
    Card,
    CardItem,
    Right,
    Left,
    Body,
    Button,
    Icon
} from 'native-base';

class ProfileComponent extends Component {
    render() {
        return (
            <Content >
                <Body>
                    <Thumbnail style={styles.thumbnail} large square source={require('../../images/luffy-avatar.png')} />
                    <H1>{this.props.user.name}</H1>
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
