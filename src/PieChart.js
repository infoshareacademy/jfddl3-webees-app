import React, {Component} from 'react';
var LineChart = require("react-chartjs").Line;

class PieChart extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="">
                <LineChart data={''} options={''} width="600" height="250"/>
            </div>
        );
    }
}

export default PieChart;