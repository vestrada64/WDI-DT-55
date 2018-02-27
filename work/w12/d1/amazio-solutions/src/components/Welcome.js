import React from 'react'
import {
    Link
} from 'react-router-dom'
import {
    Button
} from 'react-materialize'


const Welcome = () => (
    <div className="center-align amz-welcome">
        <h3>WELCOME TO AMAZIO</h3>
        <Button waves="light"><Link to="/catalogue">To Catalogue</Link></Button>
    </div>
)

export default Welcome