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
                            <Subheader>December</Subheader>
                            {tilesData.map((tile) => (
                                <GridTile
                                    key={tile.img}
                                    title={tile.title}
                                    subtitle={<span>by <b>{tile.author}</b></span>}
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
        img: 'img/lorem-ipsum.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    }
];

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
    },
};

export default List

