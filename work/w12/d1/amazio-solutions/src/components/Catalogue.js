import React, { Component, IconButton } from 'react';
import { Link } from 'react-router-dom';

import {
    Table
} from 'react-materialize'

class Catalogue extends Component {

    render() {

        let tableItems = 
            this.props.items ?  
            this.props.items.map(item => {
                return (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.sku}</td>
                    <td><IconButton 
                            onClick={() => this.props.addItem(item._id)}
                            >
                            Add Item
                        </IconButton>
                            

                    </td>
                    
                    <td><IconButton 
                            onClick={() => this.props.deleteItem(item._id)}
                            >
                            Delete Item
                        </IconButton>    
                    </td>
                </tr>)
                }) 
                : "Loading"

        return (
            <div>
                <h3 className="center-align">Catalogue</h3>
                <Link to="/">Back To Welcome</Link>
                <Link to="/checkout">Checkout</Link>
                <input type="text" onChange={this.props.filterResults}/>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="id">Name</th>
                            <th data-field="name">Price</th>
                            <th data-field="description">Description</th>
                            <th data-field="description">SKU</th>
                            <th data-field="add-item">Add Item</th>
                            <th data-field="remove-item">Remove Item</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        {tableItems}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Catalogue

