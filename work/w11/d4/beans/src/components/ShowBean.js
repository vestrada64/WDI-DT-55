import React from 'react';

const ShowBean = ({beanData}) => (
    <div>
        <h1>{beanData.name}</h1>
        <h4>{beanData.description}</h4>
        <h5>{beanData.price}</h5>
    </div>
)

export default ShowBean;