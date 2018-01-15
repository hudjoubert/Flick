import React, { Component } from 'react';
import { Container } from 'native-base';
import { ProfileComponent, HeaderComponent } from '../components/index';

class ProfileView extends Component {
	render() {
		return (
			<Container>
				<HeaderComponent nav={this.props.navigation} type={'Profile'} />
				<ProfileComponent user={this.props.navigation.state.params.user} />
			</Container>
		);
	}
}

export default ProfileView;
