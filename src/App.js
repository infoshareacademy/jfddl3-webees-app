import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './store'

import Dashboard from './components/Dashboard'
import List from './components/List'
import AddRun from './components/AddRun'
import Favourites from './components/Favourites'
import Run from './components/Run'
import Contact from './components/Contact'
import AppBar from './components/AppBar'
import SideBar from './components/SideBar'
import ShareButton from './components/ShareButton'
import styles from './styles'

class App extends Component {
    state = {
        isSideBarOpenState: false
    }

    toggleSideBar = () => (
        this.setState({isSideBarOpenState: !this.state.isSideBarOpenState})
    )

    render() {
        return (
            <Provider store={store}>
            <MuiThemeProvider>
                <div>
                <Router>
                    <div>
                        <AppBar
                            onMenuClickProps={this.toggleSideBar}

                        />
                        <SideBar
                            isSideBarOpenProps={this.state.isSideBarOpenState}
                            toggleSideBarProps = {this.toggleSideBar}
                        />

                        <Route path='/' component={Dashboard} exact={true} />
                        <Route path='/list' component={List} />
                        <Route path='/add-run' component={AddRun} />
                        <Route path='/favourites' component={Favourites} />
                        <Route path='/run/:id' component={Run}/>
                        <Route path='/contact' component={Contact} />
                    </div>
                </Router>
                <ShareButton/>
            </div>
            </MuiThemeProvider>
            </Provider>
        )

    }
}

export default App;
