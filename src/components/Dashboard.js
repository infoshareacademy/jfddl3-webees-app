import React from 'react';
import NewBarChart from './NewBarChart'
import PieChart from './PieChart'
import { Grid, Row, Col } from 'react-flexbox-grid';
import WebeesPaper from './WebeesPaper';

import { connect } from 'react-redux'

import { webeesColors } from '../styles'

const Dashboard = props => {
    const cityRuns = props.runData.filter(run => run.category === 'city')
    const cityRunsLength = cityRuns.length
    const forestRun = props.runData.filter(run => run.category === 'forest')
    const forestRunLength = forestRun.length
    const loginCount = Object.entries(props.loginCount).map(keyValueArray => (
        {
            "time": keyValueArray[0], // not working
            "users": keyValueArray[1]
        }
    ))

    const pieChartData = [
        {
            value: forestRunLength,
            name: 'Forest',
            fill: webeesColors.green
        },
        {
            value: cityRunsLength,
            name: 'City',
            fill: webeesColors.red
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
                        <Col xs={12} md={8} lg={6}>
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
    runData: state.runs.data,
    loginCount: state.auth.loginCount
})

export default connect(
    mapStateToProps
)(Dashboard)