import React from 'react'
import WebeesPaper from './WebeesPaper'
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class List extends React.Component {
    state = {value: ''}

    handleChange = (e, k, v) => this.setState({value: ''})

    render() {
        return (
            <div>
                <WebeesPaper>
                    <h1>Dystans</h1>
                    <div style={{textAlign: 'left'}}>0 km</div>
                    <div>
                        <Slider
                            min={0}
                            max={50}/>
                    </div>
                    <div style={{textAlign: 'right'}}>50km</div>
                    <div>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="Bieg po lesie"/>
                            <MenuItem value={2} primaryText="Bieg po mieście"/>
                        </DropDownMenu>
                        <br/>

                    </div>
                </WebeesPaper>
            </div>
        )
    }
}
export default List