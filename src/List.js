import React from 'react'
import ListSearch from './ListSearch'


class List extends React.Component {
    state = {category: '', name: '', distance: ''};

    handleCategoryChange = (e, index, value) => this.setState({category: value});

    handleNameChange = (e, value) => this.setState({name: value});

    handleDistanceChange = (e, value) => this.setState({distance: value});

    render() {
        return (
            <ListSearch
                handleCategoryChange={this.handleCategoryChange}
                handleNameChange={this.handleNameChange}
                handleDistanceChange={this.handleDistanceChange}
                category={this.state.category}
            />
        )
    }
}


export default List