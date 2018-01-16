import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { HeaderComponent } from '../components/index';
import styles from '../components/styles';
import {
	Container,
	Header,
	View,
	DeckSwiper,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Left,
	Body,
	Icon
} from 'native-base';

class StoriesView extends Component {
	render() {
		return (
			<Container>
				<HeaderComponent nav={this.props.navigation} type={'Stories'} />
				<View>
					<DeckSwiper
						dataSource={this.props.navigation.state.params.images}
						renderItem={item =>
							<Card style={{ elevation: 3 }}>
								<CardItem cardBody>
									<ImageBackground style={{ height: 500, flex: 1 }} source={{ uri: item }} ></ImageBackground>
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
