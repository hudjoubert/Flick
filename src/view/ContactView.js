import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Text } from 'native-base';
import { ContactComponent, HeaderComponent } from '../components/index';
import { connect } from 'react-redux';
import { getData } from '../actions';

class ContactView extends Component {
	componentDidMount() {
		this.props.getData()
	}

	render() {
		const list = this.props.users.map(user => {
			return (
				<ContactComponent nav={this.props.navigation} key={user.id} user={user} />
			);
		});

		return (
			<Container>
				<HeaderComponent nav={this.props.navigation} type={'Contact'} />
				<ScrollView>
					{list}
				</ScrollView>
			</Container>
		);
	}
}
const mapStateToProps = (state) => {
	return { users: state.profiles.users }
}
export default connect(mapStateToProps, { getData })(ContactView);
