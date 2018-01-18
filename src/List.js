import React from 'react'
import WebeesPaper from './WebeesPaper'
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


class List extends React.Component {
    state = {value: ''};

    handleChange = (e, index, value) => this.setState({value: value});

    render() {
        return (
            <div>
                <WebeesPaper>
                    <h2>Dystans</h2>
                    <div style={{textAlign: 'left'}}>0 km</div>
                    <div>
                        <Slider
                            min={0}
                            max={50}/>
                    </div>
                    <div style={{textAlign: 'right'}}>50km</div>
                    <h2>Wybierz rodzaj biegu</h2>
                    <div>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="Bieg po lesie"/>
                            <MenuItem value={2} primaryText="Bieg po mieście"/>
                        </DropDownMenu>
                        <br/>
                    </div>
                    <h2>Wyszukaj bieg</h2>
                    <div>
                        <TextField
                            hintText="Szukaj"
                            fullWidth={true}
                        />
                    </div>
                </WebeesPaper>
            </div>
        )
    }
}
export default List