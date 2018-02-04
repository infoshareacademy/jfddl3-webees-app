import React from 'react'
import WebeesPaper from './WebeesPaper'
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import styles, { webeesColors, webeesFont } from '../styles'

const ListSearch = props => (
    <div>
        <WebeesPaper>
            <div>
                <TextField
                    onChange={props.handleNameChange}
                    hintText="Wpisz nazwę"
                    floatingLabelText="Wyszukaj bieg"
                    fullWidth={true}
                    style={styles.input}
                    underlineFocusStyle={{ borderColor: webeesColors.green }}
                    floatingLabelFocusStyle={{ color: webeesColors.darkGreen }}
                />
                <div>
                    <div style={{ display: 'inline-block', textAlign: 'left', width: '10%', fontFamily: webeesFont }}>0 km</div>
                    <div style={{ display: 'inline-block', width: '70%' }}>
                        <Slider
                            sliderStyle={{ marginBottom: 0 }}
                            min={0}
                            max={50}
                            onChange={props.handleDistanceChange}
                            defaultValue={50}
                        />
                    </div>
                    <div style={{ display: 'inline-block', textAlign: 'right', width: '10%', fontFamily: webeesFont }}>50km</div>
                </div>
                <div>
                    <DropDownMenu
                        autoWidth={false}
                        style={{ width: '100%' }}
                        value={props.category}
                        onChange={props.handleCategoryChange}
                        menuItemStyle={{ fontFamily: webeesFont }}
                        labelStyle={{ fontFamily: webeesFont }}
                        selectedMenuItemStyle={{ color: webeesColors.red }}
                    >
                        <MenuItem value={''} primaryText="Wybierz bieg" />
                        <MenuItem value={'city'} primaryText="Bieg po lesie" />
                        <MenuItem value={'forest'} primaryText="Bieg po mieście" />
                    </DropDownMenu>
                    <br />
                </div>
            </div>
        </WebeesPaper>
    </div>
)

export default ListSearch