import React from 'react'
import PropTypes from 'prop-types';

function Select(props) {
    const { options, value } = props; //Variables
    const { onChange } = props; //Actions

    return (
        <select className="custom-select" onChange={onChange} defaultValue={value}>
            {options.map(option => <option value={option}>{option}</option>)}
        </select>
    )
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}

export default Select;