import React from 'react'
import {Link} from 'react-router-dom';
import WebeesPaper from './WebeesPaper'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {database} from "./firebase";


class ListView extends React.Component {
    state = {
        cols: 2,
        runs: null
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
                            {tilesData
                                .filter(tile => tile.title.indexOf(this.props.searchParams.name) !== -1)
                                // .filter(tile => tile.category === this.searchParams.props.category)
                                // .filter(tile => tile.distance < this.searchParams.props.distance )
                                .map((tile) => (
                                    <Link to={'/' + tile.title}>
                                        <GridTile
                                            key={tile.img}
                                            title={tile.title}
                                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                                        >
                                            <img src={tile.img}/>
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

const tilesData = [
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa1 butt',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa2 dupa',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa3',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa4',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa5',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa6',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa7',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa8',
    },
    {
        img: process.env.PUBLIC_URL + 'img/run-google-map.jpg',
        title: 'Mapa9',
    },

]


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

