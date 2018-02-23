import React from 'react';

const NewBean = ({ onNameChange, onPriceChange, onDescriptionChange, name, description, price, createBean }) => (
    <form onSubmit={createBean}>

        <label>
            Bean Name
            <input type="text" value={name} onChange={onNameChange} />
        </label>

        <br/>
        <br/>

        <label>
            Bean Price
            <input type="number" value={price} onChange={onPriceChange} />
        </label>

        <br/>
        <br/>

        <textarea placeholder="Where have you bean?" value={description} onChange={onDescriptionChange} />

        <input type="submit" value="New Bean" />

    </form>
)

export default NewBean;