import React from 'react';
import AjouterTarif from './AjouterTarif';

class Admin extends React.Component {

	traiterChangement = (event, key) => {
		const tarif = this.props.tarifs[key];
		const majTarif = {
			...tarif,
			[event.target.name]: event.target.value
		};
		this.props.majTarif(key, majTarif);
	};

	renderAdmin = (key) => {
		const tarif = this.props.tarifs[key];
		return (
			<div className="container" key={key} >
				<form className="form-inline">
					<input type="number" className="text-center form-control" name="prix" placeholder="Prix" value={tarif.prix} onChange={(e) => this.traiterChangement(e, key)} />
					<select  value={tarif.devise} className="text-center form-control">
						 <option >EUR</option>
						 <option >USD</option>
					 </select>
					 <select value={tarif.typeContainer} className="text-center form-control">
						 <option >20 pieds</option>
						 <option >40 pieds</option>
					 </select>
					<input className="text-center form-control" type="text" placeholder="Ville de départ" value={tarif.villeD} onChange={(e) => this.traiterChangement(e, key)} />
					<input className="text-center form-control" type="text" placeholder="Ville d'arrivée" value={tarif.villeA} onChange={(e) => this.traiterChangement(e, key)} />
					<input className="text-center form-control" type="text" placeholder="Date de début" value={tarif.dateD} onChange={(e) => this.traiterChangement(e, key)} />
					<input className="text-center form-control" placeholder="Date de fin de validité" value={tarif.dateFValidite} onChange={(e) => this.traiterChangement(e, key)} />
				</form>
				<button onClick={() => this.props.supprimerTarif(key)} >Supprimer</button>
			</div>
		)
	};

	render() {

		const adminTab = Object
			.keys(this.props.tarifs)
			.map(this.renderAdmin);

		return (
			<div className="tab">
				<AjouterTarif ajouterTarif={this.props.ajouterTarif} />
				{adminTab}
				<footer>
					<button onClick={this.props.chargerExemple} >Remplir</button>
				</footer>
			</div>
		)
	}

	static propTypes = {
		tarifs: React.PropTypes.object.isRequired,
		chargerExemple: React.PropTypes.func.isRequired,
		ajouterTarif: React.PropTypes.func.isRequired,
		majTarif: React.PropTypes.func.isRequired,
		supprimerTarif: React.PropTypes.func.isRequired,
	};

}

export default Admin;