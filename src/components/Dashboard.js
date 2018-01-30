import React from 'react';
import NewBarChart from './NewBarChart'
import PieChart from './PieChart'
import ReLineChart from './ReLineChart'
import { Grid, Row, Col } from 'react-flexbox-grid';
import WebeesPaper from './WebeesPaper';

import {connect} from 'react-redux'


const Dashboard = (props) => {
    // start
    console.log(props.runnersData)
    // stop
    return (
        <WebeesPaper>
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <PieChart/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <NewBarChart/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <ReLineChart/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </WebeesPaper>
    )
}


const mapStateToProps = state => ({
    runnersData: state.runs.data
})

export default connect(
    mapStateToProps
)(Dashboard)