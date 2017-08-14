import React from 'react';
//Media
import logo from './logo.png';

class Header extends React.Component {

	render() {
		return (
			<header>
				<div className="container-fluid App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Tableau de tarifs</h2>
				</div>
			</header>
		)
	}

}

export default Header;