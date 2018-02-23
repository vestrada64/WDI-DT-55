import React, { Component } from 'react';
import AllBeans from './AllBeans';
import NewBean from './NewBean';
import ShowBean from './ShowBean';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

class App extends Component { 

    constructor() {
        super();
        this.state = { 
            beans: null, 
            beanName: "",
            beanDescription: "",
            beanPrice: 0
        }
    }

    onNameChange = (e) => {
        this.setState({
            beanName: e.target.value
        })
    }

    onDescriptionChange = (e) => {
        this.setState({
            beanDescription: e.target.value
        })
    }

    onPriceChange = (e) => {
        this.setState({
            beanPrice: e.target.value
        })
    }

    componentDidMount() {
        fetch("/api/beans")
        .then(res => res.json())
        .then(beans => this.setState({ beans }))
        .catch(err => console.log(err))
    }

    createBean = (e) => {
        e.preventDefault();
        fetch('/api/beans', {
            headers: { 
                "Content-Type": "application/json"
            },
            method: 'POST', 
            body: JSON.stringify({ 
                name: this.state.beanName, 
                description: this.state.beanDescription, 
                price: this.state.beanPrice
            })
        })
        .then(data => data.json())
        .then((beans) => { 
            
            this.setState({
                beanName: "", 
                beanDescription: "", 
                beanPrice: 0, 
                beans: beans 
            })

            this.props.history.push("/");
            
        })
        .catch(err => console.log(err))
    }

    render() {
        return ( 
            <div>
                <Link to='/'>All Beans</Link>&nbsp;
                <Link to='/beans/new'>New Beans</Link><br/>
                <Switch>
                    <Route exact path="/" render={ () => this.state.beans ? <AllBeans beans={this.state.beans} /> : <h1>Loading...</h1> } />
                    <Route path="/beans/new" 
                           render={() => <NewBean  onNameChange={this.onNameChange} 
                                                   onPriceChange={this.onPriceChange} 
                                                   onDescriptionChange={this.onDescriptionChange} 
                                                   name={this.state.beanName} 
                                                   description={this.state.beanDescription}
                                                   price={this.state.beanPrice} 
                                                   createBean={this.createBean} />} />
                    <Route path="/beans/:id" render={ (props) => <ShowBean beanData={this.state.beans[props.match.params.id]} /> } />
                </Switch>
            </div>
        )
    }
}

export default withRouter(App);

