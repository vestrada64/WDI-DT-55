import React from 'react';
import { Link } from 'react-router-dom';

const AllBeans = ({ beans }) => (
    <div>
        <h1>All Beans</h1>
        <ul>
            { beans.map((bean, idx) => <li key={idx}><Link to={`/beans/${idx}`}>{bean.name}</Link></li>) }
        </ul>
    </div>
)

export default AllBeans;