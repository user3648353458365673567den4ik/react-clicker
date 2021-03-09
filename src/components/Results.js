import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => {
    return (
        <div>
            <center>
                { results.map(result => (
                    <div className="res" key={Math.random() * Math.random()}>
                        <h1>{result}</h1>
                    </div>
                )) }
            </center>
        </div>
    );
};

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Results;