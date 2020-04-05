import React from 'react';
import china from '../images/flags/CN.svg';
import germany from '../images/flags/DE.svg';
import lithuania from '../images/flags/LT.svg';
import latvia from '../images/flags/LV.svg';
import poland from '../images/flags/PL.svg';

const COUNTRIES = {
    china,
    germany,
    latvia,
    lithuania,
    poland
}

const Flag = (props) => {
    const { country } = props;
    console.log("FLAG", COUNTRIES[country]);
    return (
        <img src={COUNTRIES[country]} alt="flag" />
    )
}

export default Flag;