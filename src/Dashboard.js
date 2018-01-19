import React from 'react';
import NewBarChart from './BarChart'
import PieChart from './PieChart'
import ReLineChart from './ReLineChart'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Dashboard = () => (
    <div>
        <Grid>
            <Row>
                <Col xs={4} md={4}>
                    <PieChart/>
                    </Col>
                <Col xs={4} md={4}>
                    <NewBarChart/>
                </Col>
                <Col xs={4} md={4}>
                    <ReLineChart/>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Dashboard;