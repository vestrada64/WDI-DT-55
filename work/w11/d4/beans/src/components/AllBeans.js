import React from 'react';

const AllBeans = ({ beans }) => (
    <div>
        <h1>All Beans</h1>
        <ul>
            { beans.map((bean, idx) => <li key={idx}>{bean.name}</li>) }
        </ul>
    </div>
)

export default AllBeans;