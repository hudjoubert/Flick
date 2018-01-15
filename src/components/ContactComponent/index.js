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
                    <TouchableOpacity >
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../../images/luffy-avatar.png')} />
                            </Left>
                            <Body>
                                <Text>{this.props.user.name}</Text>
                                <Text note>{this.props.user.email}</Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.props.nav.navigate('Profile', {user: this.props.user})} >
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
