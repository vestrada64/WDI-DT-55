import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter
} from 'react-router-dom'
import App from './components/App'


const root = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(root, document.getElementById('root'))