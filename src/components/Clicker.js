import React from 'react'
import PropTypes from 'prop-types'

const Test = ({ counter, increment, save, clear, decrement }) => {
    return (
        <div>
            <h1 className="counter">Очки: <i>{ counter }</i></h1>
            <div className="btns">
                <button className="btn btn-inc" onClick={increment}>+</button>
                <button className="btn btn-save" onClick={save}>Save</button>
                <button className="btn btn-clear" onClick={clear}>Clear</button>
                <button className="btn btn-dec"  onClick={decrement}>-</button>
            </div>
        </div>
    )
}

Test.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Test