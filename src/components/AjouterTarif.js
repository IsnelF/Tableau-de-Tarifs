import React from 'react';

class AjouterTarif extends React.Component {

	creerTarif = (event) => {
		event.preventDefault();
		
		const tarif = {
			prix: this.prix.value,
			devise: this.devise.value,
			typeContainer: this.typeContainer.value,
			villeD: this.villeD.value,
			villeA: this.villeA.value,
			dateD: this.dateD.value,
			dateFValidite: this.dateFValidite.value
		}
		this.props.ajouterTarif(tarif);
		this.tarifForm.reset();
	};


	render() {
		return (
			<div className="container ajout-tarif">
				<form className="ajouter-tarif form-inline"
					  ref={input => this.tarifForm = input}
					  onSubmit={(e) => this.creerTarif(e)}
				>
					<div className="form-group">
						<input ref={input => this.prix = input} className="text-center form-control" type="number" placeholder="Prix" />
						<select ref={input => this.devise = input} className="text-center form-control">
							<option value="EUR">EUR</option>
							<option value="USD">USD</option>
						</select>
						<select ref={input => this.typeContainer = input} className="text-center form-control">
							<option value="20 pieds">20 pieds</option>
							<option value="40 pieds">40 pieds</option>
						</select>
						<input ref={input => this.villeD = input} className="text-center form-control" type="text" placeholder="Marseille" />
						<input ref={input => this.villeA = input} className="text-center form-control" type="text" placeholder="Japon" />
						<input ref={input => this.dateD = input} className="text-center form-control" type="text" placeholder="13/08/17" />
						<input ref={input => this.dateFValidite = input} className="text-center form-control" type="text" placeholder="13/09/17" />
					</div>
					<button type="submit">+ Ajouter un tarif</button>
				</form>
			</div>
		)
	}

	static propTypes = {
		ajouterTarif: React.PropTypes.func.isRequired
	};

}

export default AjouterTarif;