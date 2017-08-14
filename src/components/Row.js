import React from 'react';

class Row extends React.Component {

	render() {

		return (
			<tr>
				<td className="text-center">{this.props.details.prix}</td>
				<td className="text-center">{this.props.details.devise}</td>
				<td className="text-center">{this.props.details.typeContainer}</td>
				<td className="text-center">{this.props.details.villeD}</td>
				<td className="text-center">{this.props.details.villeA}</td>
				<td className="text-center">{this.props.details.dateD}</td>
				<td className="text-center">{this.props.details.dateFValidite}</td>
			</tr>
		)
	}

	static propTypes = {
	  details: React.PropTypes.object.isRequired
	};
}

export default Row;