import React from 'react'
import { Link } from 'react-router-dom'
import WebeesPaper from './WebeesPaper'
import { GridList, GridTile } from 'material-ui/GridList'
import { connect } from 'react-redux'

import styles, { webeesColors, webeesFont } from '../styles'

class ListView extends React.Component {
    state = {
        cols: 2,
        runs: []
    }

    componentWillMount() {
        const width = window.innerWidth

        if (width < 1000) {
            this.setState({
                cols: 2
            })
        } else {
            this.setState({
                cols: 4
            })
        }
    }

    polishSignsConversion = letter => {
        switch (letter) {
            case "ą":
                return "a"
            case "ć":
                return "c"
            case "ę":
                return "e"
            case "ł":
                return "l"
            case "ń":
                return "n"
            case "ó":
                return "o"
            case "ś":
                return "s"
            case "ź":
                return "z"
            case "ż":
                return "z"
            default:
                return letter
        }
    }

    lowercaseEnglishSigns = name => (name.toLowerCase().split('').map(this.polishSignsConversion).join(''))

    render() {
        return (
            <div>
                <WebeesPaper>
                    <div style={styles.root}>
                        <GridList
                            cellHeight={180}
                            style={styles.gridList}
                            cols={this.state.cols}
                            padding={12}
                        >
                            {this.props.runs
                                &&
                                this.props.runs
                                    .filter(run => this.props.searchParams.category === '' ?
                                        true
                                        :
                                        run.category === this.props.searchParams.category
                                    )
                                    .filter(run => run.distance < this.props.searchParams.distance)
                                    .filter(run => this.lowercaseEnglishSigns(run.name).indexOf(
                                        this.lowercaseEnglishSigns(this.props.searchParams.name)
                                    ) !== -1)
                                    .map((run) => (
                                        <Link
                                            key={run.key}
                                            to={'/run/' + run.key}
                                        >
                                            <GridTile
                                                title={run.name + ' - ' + Math.round(run.distance * 1000) / 1000 + ' km'}
                                                titleStyle={{ fontFamily: webeesFont, color: webeesColors.dark }}
                                                titleBackground={'rgba(0, 0, 0, 0.1)'}
                                                style={{border: '1px solid lightgrey'}}
                                            >
                                                <img src={`${process.env.PUBLIC_URL}/img/run-google-map.jpg`} alt="run map" />
                                            </GridTile>
                                        </Link>
                                    ))}
                        </GridList>
                    </div>
                </WebeesPaper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    runs: state.runs.data
})

export default connect(
    mapStateToProps
)(ListView)

