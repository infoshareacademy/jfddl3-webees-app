import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class SideBar extends React.Component {
    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={250}
                    open={this.props.isSideBarOpenProps}
                    onRequestChange={this.props.toggleSideBarProps}
                >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;