import React from 'react'
import { PieChart as RePieChart, Pie, Tooltip } from 'recharts'
import styles from '../styles'

const PieChart = props => (
    <div>
        <div style={styles.flexCenter}>
            <h2 style={styles.webeesFont}>Rodzaje tras biegowych</h2>
            <RePieChart width={450} height={450}>
                <Pie
                    data={props.data}
                    dataKey="value"
                    nameKey="name"
                    labelLine={false}
                />
                <Tooltip />
            </RePieChart>
        </div>
    </div>
)

export default PieChart