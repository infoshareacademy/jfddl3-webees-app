import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import styles from '../styles'

class SideBar extends Component {
    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={250}
                    open={this.props.isSideBarOpenProps}
                    onRequestChange={this.props.toggleSideBarProps}
                    containerStyle={styles.sideBar}
                >
                    <Link to="/dashboard" style={styles.link}>
                        <MenuItem onClick={this.props.toggleSideBarProps} style={styles.link}>
                            Dashboard
                        </MenuItem>
                    </Link>
                    <Link to="/add-run" style={styles.link}>
                        <MenuItem onClick={this.props.toggleSideBarProps} style={styles.link}>
                            Nowy bieg
                        </MenuItem>
                    </Link>
                    <Link to="/list" style={styles.link}>
                        <MenuItem onClick={this.props.toggleSideBarProps} style={styles.link}>
                            Lista biegów
                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;