import React from 'react';

class Connexion extends React.Component {

	goToApp = event => {
		event.preventDefault();
		// On récupère le nom de l'utilisateur
		const utilisateur = this.boxInput.value;
		// On change d'url
		this.context.router.transitionTo(`/tableau/${utilisateur}`);
	}

	render() {
		return (
			<div className="connexionBox">
				<form className="connexion" onSubmit={(e) => this.goToApp(e)} >
					<h1>Connexion</h1>
					<input type="text" placeholder="Nom de l'utilisateur" pattern="[A-Za-z-]{1,}" required ref={(input) => {this.boxInput = input}} />
					<button className="btn-connexion" type="submit">Ok</button>
					<p>Pas de caractères spéciaux.</p>
				</form>
			</div>
		)
	}

	static contextTypes = {
		router: React.PropTypes.object
	};
}

export default Connexion;