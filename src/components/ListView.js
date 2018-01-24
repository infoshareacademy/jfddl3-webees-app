import React from 'react'
import {Link} from 'react-router-dom';
import WebeesPaper from './WebeesPaper'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {database} from "../firebase";


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

        var dbRef = database.ref('/runs');
        dbRef.once('value', snapshot => {
            const runFromDataBase = Object.entries(snapshot.val())
                .map(([key, val]) => {
                    val.key = key
                    return val
                })
            this.setState({runs: runFromDataBase})
        })
    }

    render() {
        // console.log(this.state.runs)
        console.log(this.props.searchParams.distance)
        return (
            <div>
                <WebeesPaper>
                    <div style={styles.root}>
                        <GridList
                            cellHeight={180}
                            style={styles.gridList}
                            cols={this.state.cols}
                        >
                            <Subheader>Galeria</Subheader>
                            {this.state.runs
                                .filter(run => run.name.indexOf(this.props.searchParams.name) !== -1)
                                .filter(run => this.props.searchParams.category === '' ? true : run.category === this.props.searchParams.category)
                                .filter(run => run.distance < this.props.searchParams.distance)
                                .map((run) => (
                                    <Link
                                        key={run.key}
                                        to={'/run/' + run.key}
                                    >
                                        <GridTile
                                            title={run.name}
                                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                                        >
                                            <img src={`${process.env.PUBLIC_URL}/img/run-google-map.jpg`}/>
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

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 450,
        overflowY: 'auto',
    }
};

export default ListView

