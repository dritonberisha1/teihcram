import React from 'react';
import ce from '../images/certificates/certification-ce.svg';
import fda from '../images/certificates/certification-fda.svg';
import iso from '../images/certificates/certification-iso.svg';
const CERTIFICATES = {
    ce,
    fda,
    iso
}
const Certificate = (props) => {
    const { type, className } = props;
    return (
        <img src={CERTIFICATES[type]} className={className} alt="Certificate" />
    )
}
export default Certificate;