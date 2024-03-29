import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import store from './store'
import Dashboard from './components/Dashboard'
import List from './components/List'
import AddRun from './components/AddRun'
import Run from './components/Run'
import AppBar from './components/AppBar'
import SideBar from './components/SideBar'
import ShareButton from './components/ShareButton'
import Auth from './components/Auth'

import { webeesColors } from './styles'

const muiTheme = getMuiTheme({
    slider: {
        trackColor: webeesColors.darkGreen,
        selectionColor: webeesColors.darkGreen
    }
})

class App extends Component {
    state = {
        isSideBarOpenState: false
    }

    toggleSideBar = () => (
        this.setState({ isSideBarOpenState: !this.state.isSideBarOpenState })
    )

    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Auth>
                        <Router>
                            <div>
                                <AppBar
                                    onMenuClickProps={this.toggleSideBar}
                                />
                                <SideBar
                                    isSideBarOpenProps={this.state.isSideBarOpenState}
                                    toggleSideBarProps={this.toggleSideBar}
                                />
                                <Route path='/' component={Dashboard} exact={true} />
                                <Route path='/list' component={List} />
                                <Route path='/add-run' component={AddRun} />
                                <Route path='/run/:id' component={Run} />
                            </div>
                        </Router>
                        <ShareButton />
                    </Auth>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default App
