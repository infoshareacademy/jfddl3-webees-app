import React from 'react';
import NewBarChart from './NewBarChart'
import PieChart from './PieChart'
import ReLineChart from './ReLineChart'
import {Grid, Row, Col} from 'react-flexbox-grid';
import WebeesPaper from './WebeesPaper';

import {connect} from 'react-redux'

const Dashboard = (props) => {
    const cityRuns = props.runData.filter(run => run.category === 'city')
    const cityRunsLength = cityRuns.length
    const forestRun = props.runData.filter(run => run.category === 'forest')
    const forestRunLength = forestRun.length

    const pieChartData = [{
        value: forestRunLength,
        name: 'forest',
        fill: 'lime'

    },
        {
            value: cityRunsLength,
            name: 'city',
            fill: 'red'
        }
    ]

    return (
        <WebeesPaper>
            <div>
                <Grid>
                    <Row>
                        <Col class="col-xs-9 col-md-6 col-lg-4" >
                            <PieChart
                                data={pieChartData}
                            />
                        </Col>
                        <Col class ="col-xs-9 col-md-6 col-lg-4" >
                            <NewBarChart
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        </WebeesPaper>
    )
}


const mapStateToProps = state => ({
    runData: state.runs.data
})

export default connect(
    mapStateToProps
)(Dashboard)