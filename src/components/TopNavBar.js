import React from 'react';
import logo from '../assets/nba-logoman-word-white.svg';

export default class TopNavBar extends React.Component {
	render() {
		return (
			<header className="header">
				<img src={logo} className="logo" alt="logo" />
			</header>
		);
	}
}
