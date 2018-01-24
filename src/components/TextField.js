import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = (props) => (
    <div>
        <TextField
            floatingLabelText="Nazwa biegu"
            value={props.name}
            onChange={props.onTextFieldChange}
        />
    </div>
);

export default TextFieldExampleSimple;