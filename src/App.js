import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dashboard from './Dashboard';
import List from './List';
import AddRun from './AddRun';
import Favourites from './Favourites';
import Run from './Run';
import Contact from './Contact';
import AppBar from './AppBar';
import SideBar from './SideBar';
import ShareButton from './ShareButton'


class App extends Component {
    state = {
        isSideBarOpenState: false
    }

    toggleSideBar = () => (
        this.setState({isSideBarOpenState: !this.state.isSideBarOpenState})
    )

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <AppBar
                            onMenuClickProps={this.toggleSideBar}

                        />
                        <SideBar
                            isSideBarOpenProps={this.state.isSideBarOpenState}
                            toggleSideBarProps={this.toggleSideBar}
                        />

                        <Route path='/' component={Dashboard} exact={true}/>
                        <Route path='/list' component={List}/>
                        <Route path='/add-run' component={AddRun}/>
                        <Route path='/favourites' component={Favourites}/>
                        <Route path='/run/:id' component={Run}/>
                        <Route path='/contact' component={Contact}/>
                    </div>
                </Router>
                <ShareButton/>
            </MuiThemeProvider>
        )

    }
}

export default App;
