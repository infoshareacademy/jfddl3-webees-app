import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default (props) => (
    <div>
        <SelectField
            floatingLabelText="Rodzaj biegu"
            value={props.runCategory}
            onChange={props.onSelectChange}
        >
            <MenuItem value={'city'} primaryText="Miejski"/>
            <MenuItem value={'forest'} primaryText="Leśny"/>
        </SelectField>
    </div>

)