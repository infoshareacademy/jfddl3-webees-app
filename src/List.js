import React from 'react'
import WebeesPaper from './WebeesPaper'
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


class List extends React.Component {
    state = {category: '', name: '', distance: ''};

    handleCategoryChange = (e, index, value) => this.setState({category: value});

    handleNameChange = (e, value) => this.setState({name: value});

    handleDistanceChange = (e, value) => this.setState({distance: value});

    render() {
        return (
            <div>
                <WebeesPaper>
                    <div>
                        <TextField
                            onChange={this.handleNameChange}
                            hintText="Wpisz nazwę biegu"
                            fullWidth={true}
                        />
                        <div>
                            <div style={{display: 'inline-block', textAlign: 'left', width: '10%'}}>0 km</div>
                            <div style={{display: 'inline-block', width: '80%'}}>
                                <Slider
                                    sliderStyle={{marginBottom: 0}}
                                    min={0}
                                    max={50}
                                    onChange={this.handleDistanceChange}
                                />
                            </div>
                            <div style={{display: 'inline-block', textAlign: 'right', width: '10%'}}>50km</div>
                        </div>
                        <div>
                            <DropDownMenu
                                autoWidth={false}
                                style={{width: '100%'}}
                                value={this.state.category}
                                onChange={this.handleCategoryChange}
                            >
                                <MenuItem value={''} primaryText="Wybierz bieg"/>
                                <MenuItem value={'city'} primaryText="Bieg po lesie"/>
                                <MenuItem value={'forest'} primaryText="Bieg po mieście"/>
                            </DropDownMenu>
                            <br/>
                        </div>
                    </div>
                </WebeesPaper>
            </div>
        )
    }
}

export default List