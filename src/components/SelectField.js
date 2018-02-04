import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { webeesColors, webeesFont } from '../styles'

/* ********************************************************************* */

export const RunCategorySelect = props => (
	<div>
		<SelectField
			floatingLabelText="Rodzaj biegu"
			value={props.category}
			onChange={props.onSelectChange}
			selectedMenuItemStyle={{ color: webeesColors.red }}
			menuItemStyle={{ fontFamily: webeesFont }}
			labelStyle={{ fontFamily: webeesFont }}
			underlineFocusStyle={{ borderColor: webeesColors.green }}
			floatingLabelStyle={{ color: webeesColors.darkGreen, fontFamily: webeesFont }}
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
				floatingLabelText="Liczba uczestników"
				value={this.props.runners}
				onChange={this.props.onSelectChange}
				maxHeight={200}
				menuItemStyle={{ fontFamily: webeesFont }}
				labelStyle={{ fontFamily: webeesFont }}
				selectedMenuItemStyle={{ color: webeesColors.red }}
				underlineFocusStyle={{ borderColor: webeesColors.green }}
				floatingLabelStyle={{ color: webeesColors.darkGreen, fontFamily: webeesFont }}
			>
				{items}
			</SelectField>
		)
	}
}