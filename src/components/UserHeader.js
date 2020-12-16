import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ userId, fetchUser, user }) => {
	useEffect(
		() => {
			fetchUser(userId);
		},
		[ userId ]
	);

	// const username = user.find((user) => user.id === userId);

	if (!user) {
		return null;
	}

	return <div>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
	return { user: state.user.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);
