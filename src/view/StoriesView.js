import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import styles from '../components/styles';
// const cards = [
//   {
//     text: 'Card One',
//     name: 'One',
//     image: require('./img/swiper-1.png'),
//   },
//   .  .  .
// ];
class StoriesView extends Component {
    render() {
        return (
            <Container>
                <Header />
                <View>
                    <DeckSwiper
                        dataSource={this.props.navigation.state.params.images}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail />
                                        <Body>
                                            <Text>texte</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={{uri: item}} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
        );
    }
}
export default StoriesView;