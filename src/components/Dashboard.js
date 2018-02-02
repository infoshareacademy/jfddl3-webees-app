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
        name: 'Forest',
        fill: 'lime'

    },
        {
            value: cityRunsLength,
            name: 'City',
            fill: 'red'
        }
    ]

    return (
        <WebeesPaper>
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={8} lg={6}>
                            <PieChart
                                data={pieChartData}
                            />
                        </Col>
                        <Col xs={12} md={8} lg={6} >
                            <NewBarChart
                                data={NewBarChart}
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