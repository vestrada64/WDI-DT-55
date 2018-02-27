import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// custom components below
import Welcome from './Welcome'
import Catalogue from './Catalogue'
import Checkout from './Checkout'
import Confirmation from './Confirmation'

import { 
    Navbar,
    NavItem
} from 'react-materialize'

class App extends Component {

    constructor() {
        super();
        // items is a list of items that are currently filtered - default is all items 
        // allItems is a list of all items
        this.state = {
            items: null, 
            allItems: null
        }
    }

    componentDidMount = () => {
        fetch('/api/products', {
            method: 'GET'
        }).then((data) => {
            return data.json()
        }).then((jsonItems) => {
            this.setState({
                items: jsonItems, 
                allItems: jsonItems
            })
        })
    }

    addItem = (e, id) => {
        e.stopPropagation();
        fetch(`/api/add-product/${id}`)
            .then(data => data.json())
    }

    deleteItem = (id) => {
        fetch(`/api/delete-product/${id}`)
        .then(data => data.json())
    }

    filterResults = (e) => {
        console.log('Change event has fired!')
        let searchTerm = e.target.value
        let results = this.state.allItems.filter((item) => item.name.indexOf(searchTerm) !== -1)
        this.setState({
            items: results
        })
    }

    render() {
        return (
            <div>
                <Navbar brand='AMAZIO' right></Navbar>
                <div className="container">
                    <Route exact path="/" component={Welcome} />
                    <Route path="/catalogue" render ={() => <Catalogue items={this.state.items} 
                                                                       filterResults={this.filterResults} 
                                                                       addItem={this.addItem}
                                                                       deleteItem={this.deleteItem}
                                                                       />} />
                    <Route path="/checkout" render={() => <Checkout />} />
                    <Route path="/confirmation" render={() =>  <Confirmation />} />
                </div>
            </div>
        )
    }

}

export default App