import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import styles from '../styles';
import {
    Content,
    Card,
    CardItem,
    Text,
    Left,
    Right
} from 'native-base';

class StoryComponent extends Component {
    render() {
        return (
            <Content>
                <Card>
                    <CardItem cardBody>
                        <ImageBackground source={{ uri: this.props.url }} style={styles.CardImage}>
                            <View style={styles.CardImageMargin}>
                                <CardItem style={styles.StoryHeader}>
                                    <Left>
                                        <Text style={styles.StoryTitle}>{this.props.title}</Text>
                                    </Left>
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
