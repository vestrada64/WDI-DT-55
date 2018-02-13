import React from 'react'

const Lane = (props) => {

    // filtering tasks for specific progress level
    let filteredTasks = props.tasks.filter((task) => task.progressLevel === props.laneProgressLevel);

    // mapping over filtered tasks to create an array of JSX DOM nodes
    let taskList = filteredTasks.map(task => {
        return (
            <div key={task.id} >
                <h2>{task.title}</h2>
                <p>{task.description}</p>  
                <button onClick={() => props.updateState(task.id, task.progressLevel)}>Promote</button>          
            </div>
        )
    })

    return (
        <div className="lane">
            <h2>{props.laneProgressLevel.toUpperCase()}</h2>
            { taskList }
        </div>
    )
}

export default Lane;