import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import { StoryComponent, HeaderComponent } from '../components/index';
import { getPhotos } from '../actions';
import { connect } from 'react-redux';

class DiscoverView extends Component {
	componentDidMount() {
		this.props.getPhotos();
	}

	render() {
		console.log(this.props);

		const discoverList = this.props.photos.map(photo => {
			return (
				<StoryComponent key={photo.id} url={photo.image} title={photo.name} />
			);
		});
		return (
			<Container>
				<HeaderComponent nav={this.props.navigation} type={'Discover'} />
				<ScrollView>
					{discoverList}
				</ScrollView>
			</Container>
		);
	}
}
const mapStateToProps = (state) => {
	return { photos: state.discover.photos }
}

export default connect(mapStateToProps, { getPhotos })(DiscoverView);
