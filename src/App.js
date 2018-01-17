import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import List from './List';
import AddRun from './AddRun';
import Favourites from './Favourites';
import Run from './Run';
import Contact from './Contact';
import AppBar from './AppBar';
import SideBar from './SideBar';

import PieChart from './PieChart';



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar/>

                    <SideBar/>

                    <PieChart/>




                    <Route path='/' component={PieChart} exact={true} />
                    <Route path='/' component={Dashboard} exact={true} />
                    <Route path='/list' component={List} />
                    <Route path='/add-run' component={AddRun} />
                    <Route path='/favourites' component={Favourites} />
                    <Route path='/run' component={Run} />
                    <Route path='/contact' component={Contact} />
                </div>
            </Router>
        );
    }
}


export default App;
