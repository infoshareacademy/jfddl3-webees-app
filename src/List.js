import React from 'react'
import ListSearch from './ListSearch'
import ListView from './ListView'


class List extends React.Component {
    state = {category: '', name: '', distance: 50};

    handleCategoryChange = (e, index, value) => this.setState({category: value});

    handleNameChange = (e, value) => this.setState({name: value});

    handleDistanceChange = (e, value) => this.setState({distance: value});

    render() {
        return (
            <div>
                <ListSearch
                    handleCategoryChange={this.handleCategoryChange}
                    handleNameChange={this.handleNameChange}
                    handleDistanceChange={this.handleDistanceChange}
                    category={this.state.category}
                />
                <ListView
                    searchParams={this.state}
                />
            </div>
        )
    }
}

export default List