import React from 'react'
import WebeesPaper from './WebeesPaper'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class List extends React.Component {
    state = {
        cols: 2
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
                            {tilesData.map((tile) => (
                                <GridTile
                                    key={tile.img}
                                    title={tile.title}
                                    actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                                >
                                    <img src={tile.img}/>
                                </GridTile>
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
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa1',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa2',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa3',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa4',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa5',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa6',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa7',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
        title: 'Mapa8',
    },
    {
        img: process.env.PUBLIC_URL+'img/run-google-map.jpg',
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

export default List

