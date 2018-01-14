import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import styles from '../styles';
import {
    Container,
    Content,
    Header,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right
} from 'native-base';

class StoryComponent extends Component {
    state = {}
    render() {
        return (
            <Content>
                <Card>
                    <CardItem cardBody>
                        <ImageBackground source={require('../../images/luffy2-avatar.png')} style={styles.CardImage}>
                            <View style={styles.CardImageMargin}>
                                <CardItem style={styles.StoryHeader}>
                                    <Left>
                                        <Text style={styles.StoryTitle}>titulo</Text>
                                        <Text note style={styles.StorySubtitle}>subtitulo</Text>
                                    </Left>
                                    <Body>
                                    </Body>
                                    <Right />
                                </CardItem>
                            </View>
                        </ImageBackground>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default StoryComponent;
