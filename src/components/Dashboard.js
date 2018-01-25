import React from 'react';
import NewBarChart from './BarChart'
import PieChart from './PieChart'
import NeuBarChart from './NeuBarChart'

import { Grid, Row, Col } from 'react-flexbox-grid';
import WebeesPaper from "./WebeesPaper";

const Dashboard = () => (
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

                    </Col>
                </Row>
            </Grid>
        </div>
    </WebeesPaper>
)

export default Dashboard;