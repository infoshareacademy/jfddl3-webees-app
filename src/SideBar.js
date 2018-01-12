import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class SideBar extends Component {
    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={250}
                    open={this.props.isSideBarOpenProps}
                    onRequestChange={this.props.toggleSideBarProps}
                >
                    <Link to="/add-run">
                        <MenuItem onClick={this.props.toggleSideBarProps}>
                            Nowy bieg
                        </MenuItem>
                    </Link>
                    <Link to="/list">
                        <MenuItem onClick={this.props.toggleSideBarProps}>
                            Lista biegów
                        </MenuItem>
                    </Link>
                    <Link to="/favourites">
                        <MenuItem onClick={this.props.toggleSideBarProps}>
                            Ulubione
                        </MenuItem>
                    </Link>
                    <Link to="/contact">
                        <MenuItem onClick={this.props.toggleSideBarProps}>
                            Kontakt
                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;