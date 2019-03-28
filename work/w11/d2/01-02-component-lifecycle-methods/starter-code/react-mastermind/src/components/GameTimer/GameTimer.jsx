import React, {Component} from 'react';
import './GameTimer.css';

function formatElapsedTime(seconds) {
    function pad(val, places) {
        var s = val.toString();
        return '0'.repeat(places - s.length) + s;
    }
    return `${pad(Math.floor(seconds / 60), 2)}:${pad(seconds % 60, 2)}`;
}

class GameTimer extends Component {
    componentDidMount() {
        this.timerId = setInterval(
            this.props.handleTick,
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    
    render() {
        return (
            <div className='GameTimer'>
                {formatElapsedTime(this.props.elapsedTime)}
            </div>
        );
    }
}

export default GameTimer;