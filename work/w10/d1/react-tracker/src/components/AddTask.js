import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className="lane">
                <form onSubmit={ this.props.newSubmission }>

                    <label>
                        Add Title
                        <input type="text" 
                               value={this.props.newTitle} 
                               onChange={this.props.updateTitle}/>
                    </label>

                    <br/>

                    <label>
                        Add Description
                        <input type="text" 
                               value={this.props.newDescription} 
                               onChange={this.props.updateDescription} />
                    </label>

                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}

export default AddTask;