// React
import React from 'react';
//Components
import Header from './Header';
import Admin from './Admin';
import Row from './Row';
// Importer les exemples de tarifs
import tarifs from '../tarifsExemple';
// Firebase
import base from '../base';
//css
import '../style/css/bootstrap.min.css';

class App extends React.Component {

	state = {
		tarifs: {}
	};

	//Avant le montage
	componentWillMount() {
		this.ref = base.syncState(`${this.props.params.utilisateur}/tarifs`, {
			context: this,
			state: 'tarifs'
		});
	}

	componentWillUnmount() {
	  base.removeBinding(this.ref);
	}

	chargerExemple = () => {
		this.setState({ tarifs });
	};

	ajouterTarif = (tarif) => {
		//Copie de tous le contenu du state
		const tarifs = {...this.state.tarifs};
		const timestamp = Date.now();
		tarifs[`tarif-${timestamp}`] = tarif;
		this.setState({ tarifs });
	};

	majTarif = (key, majTarif) => {
		const tarifs = {...this.state.tarifs};
		tarifs[key] = majTarif;
		this.setState({ tarifs });
	};

	supprimerTarif = (key) => {
		const tarifs = {...this.state.tarifs};
		tarifs[key] = null;
		this.setState({ tarifs });
	};

	render() {

		const rows = Object
			.keys(this.state.tarifs)
			.map(key => <Row key={key} details={this.state.tarifs[key]} />);

		return (
			<div>
				<Header />
				<div className="container">
					<table className="tableau-affichage table table-responsive table-bordered table-hover">
						<thead>
							<tr>
								<th className="text-center">Prix</th>
								<th className="text-center">Devise</th>
								<th className="text-center">Type de container</th>
								<th className="text-center">Lieu de départ</th>
								<th className="text-center">Lieu d'arrivé</th>
								<th className="text-center">Date de début</th>
								<th className="text-center">Date de fin de validité</th>
							</tr>
						</thead>
						<tbody>
							{rows}
						</tbody>
					</table>
				</div>
				<Admin
					tarifs={this.state.tarifs}
					chargerExemple={this.chargerExemple}
					ajouterTarif={this.ajouterTarif}
					majTarif={this.majTarif}
					supprimerTarif={this.supprimerTarif}
				/>
			</div>
		)
	}

}

export default App;