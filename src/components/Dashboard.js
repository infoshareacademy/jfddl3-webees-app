import React from 'react';
import NewBarChart from './NewBarChart'
import PieChart from './PieChart'
import ReLineChart from './ReLineChart'
import { Grid, Row, Col } from 'react-flexbox-grid';
import WebeesPaper from './WebeesPaper';

import {connect} from 'react-redux'


const Dashboard = (props) => {
    // start
    console.log(props.runData)
    const newArr = props.runData.filter(run => run.category === 'city')
    console.log(newArr)
    console.log(newArr.length)
    const newArr1 = props.runData.filter(run => run.category === 'forest')
    console.log(newArr1)
    console.log(newArr1.length)
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
    runData: state.runs.data
})

export default connect(
    mapStateToProps
)(Dashboard)