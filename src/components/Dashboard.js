import React from 'react'
import NewBarChart from './NewBarChart'
import PieChart from './PieChart'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'

import { connect } from 'react-redux'

import styles, { webeesColors } from '../styles'

const Dashboard = props => {
    const cityRuns = props.runData.filter(run => run.category === 'city')
    const forestRun = props.runData.filter(run => run.category === 'forest')
    const dayName = dayNumber => {
        switch (dayNumber) {
            case '0': return 'dziś';
            case '1': return 'wczoraj';
            default: return (dayNumber + ' dni');
        }
    }
    const loginCount = Object.entries(props.loginCount).map(keyValueArray => (
        {
            "time": dayName(keyValueArray[0]),
            "users": keyValueArray[1]
        }
    ))

    const pieChartData = [
        {
            value: forestRun.length,
            name: 'Forest',
            fill: webeesColors.darkGreen
        },
        {
            value: cityRuns.length,
            name: 'City',
            fill: webeesColors.red
        }
    ]

    return (
        <Paper style={styles.dashboard}>
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={6}>
                            <PieChart
                                data={pieChartData}
                            />
                        </Col>
                        <Col xs={12} md={12} lg={12} xl={6}>
                            <NewBarChart
                                data={loginCount}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        </Paper>
    )
}

const mapStateToProps = state => ({
    runData: state.runs.data,
    loginCount: state.auth.loginCount
})

export default connect(
    mapStateToProps
)(Dashboard)