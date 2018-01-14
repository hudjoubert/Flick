import React, { Component } from 'react';
import {
    Content,
    List,
    ListItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Right,
    Icon,
    Button
} from 'native-base';
import { TouchableOpacity } from 'react-native' ;

class ContactComponent extends Component {
    state = {}
    render() {
        return (
            <Content>
                <List >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../../images/luffy-avatar.png')} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Button transparent >
                                    <Icon name='arrow-forward' />
                                </Button>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                </List>
            </Content>
        );
    }

}

export default ContactComponent;
