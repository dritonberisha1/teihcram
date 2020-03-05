import React from 'react'
import PropTypes from 'prop-types';

function Select(props) {
    const { options, value } = props; //Variables
    const { onChange } = props; //Actions

    return (
        <select class="custom-select" onChange={onChange} value={value}>
            {options.map(option => <option selected={option === value} value={option}>{option}</option>)}
        </select>
    )
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}

export default Select;