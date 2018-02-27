import React, { Component, Button } from 'react';
import { Link } from 'react-router-dom';

import {
    Table
} from 'react-materialize'

const Catalogue = ({ items, addItem, deleteItem, filterResults }) => {

    let tableItems = 
        items ?  
        items.map(item => {
            return (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.sku}</td>
                    <td><button className="waves-effect waves-light btn" onClick={() => addItem(item._id)}>Add Item</button></td>
                    <td><button className="waves-effect waves-light btn" onClick={() => deleteItem(item._id)}>Delete Item</button></td>
                </tr>
                )
            }) 
            : "Loading";

    return (
        <div>
            <h3 className="center-align">Catalogue</h3>
            <div className="row">
                <div className="col s6">
                    <Link to="/">Back To Welcome</Link> 
                </div>
                <div className="col s6">
                    <Link to="/checkout">Checkout</Link>
                </div>
            </div>
            <label>Filter Results</label>
            <input type="text" onChange={filterResults}/>
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
};

export default Catalogue;

