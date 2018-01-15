import React from 'react'
import WebeesPaper from './WebeesPaper'
import Slider from 'material-ui/Slider';

const SliderExampleStep = () => (
    <Slider step={0.10} value={0.5} />
);

const List = () => (
    <div>
        <WebeesPaper>
            <h1>Dystans</h1>
        <div style={{textAlign:'left', padding:'50'}}>0 km</div>
            <div>
            <Slider
                min={0}
                max={50}/>
            </div>
            <div style={{textAlign:'right'}}>50km</div>
        </WebeesPaper>
    </div>
)

export default List