import React from 'react'
import WebeesPaper from './WebeesPaper'
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const SliderExampleStep = () => (
    <Slider step={0.10} value={0.5}/>
);


class List {
    <div>
        <WebeesPaper>
            <h1>Dystans</h1>
<div style={{textAlign: 'left', padding: '50'}}>0 km</div>
            <div>
<Slider
min={0}
max={50}/>
            </div>


<div>
<DropDownMenu value={this.state.value} onChange={this.handleChange}>
<MenuItem value={1} primaryText="Bieg po lesie"/>
<MenuItem value={2} primaryText="Bieg po mieście"/>
</DropDownMenu>
<br/>

</div>

<div style={{textAlign: 'right'}}>50km</div>
        </WebeesPaper>
    </div>
)
}
export default List