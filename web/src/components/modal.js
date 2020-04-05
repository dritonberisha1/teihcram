import React, { useState, useEffect } from 'react';
const Modal = (props) => {
    const { openModal, children } = props; //Variables
    const { toggleModal } = props;
    const [display, setDisplay] = useState(openModal);

    useEffect(() => {
        setDisplay(openModal)
    }, [props]);

    return (
        <React.Fragment>
            <div className="modal" aria-labelledby="exampleModalLabel"
                aria-hidden="true" style={{ display: display && 'block' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content w-75 mx-auto rounded">
                        <div className="modal-body p-4">
                            <div className="col-12 text-center">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {display && <div className="modal-backdrop fade show"></div>}
        </React.Fragment>
    )
}
export default Modal;