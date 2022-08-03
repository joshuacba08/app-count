import React, { useState } from 'react';
import './styles/Count.css'

const Count = ({ initial, stock }) => {

    const [ count, setCount ] = useState(initial);

    const addCount = (num) => {
        console.log('Se ejecuta addCount');
        setCount(count + num);
    }

    return(
        <div className="count-container">

            <div className="count-container__count">{count}</div>

            <div className="count-container__controls">
                <button 
                    disabled={count===initial}
                    className="controls__button"
                    onClick={()=>{addCount(-1)}}               
                >
                    -
                </button>
                <button
                    disabled={count===stock} 
                    className="controls__button"
                    onClick={()=>{addCount(1)}}
                >
                    +
                </button>
            </div>

        </div>
    )
}

export default Count;