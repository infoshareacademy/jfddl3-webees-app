import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

/* ********************************************************************* */

export const RunCategorySelect = props => (
	<div>
		<SelectField
			floatingLabelText="Rodzaj biegu"
			value={props.category}
			onChange={props.onSelectChange}
		>
			<MenuItem value={'city'} primaryText="Miejski" />
			<MenuItem value={'forest'} primaryText="Leśny" />
		</SelectField>
	</div>
)

/* ********************************************************************* */

const items = []
for (let i = 1; i <= 100; i++)
	items.push(<MenuItem value={i} key={i} primaryText={i} />)

export class RunnersCountSelect extends React.Component {
	render() {
		return (
			<SelectField
				value={this.props.runners}
				onChange={this.props.onSelectChange}
				maxHeight={200}
			>
				{items}
			</SelectField>
		)
	}
}