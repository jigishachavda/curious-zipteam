import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Svg from './Svg';

const Modals = ({ onClose, children, modalClass, id }) => {
    return (
        <>
            <div className={`modal fade ${modalClass}`} id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="contact_modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center justify-content-center position-relative radiusL border-0">
                        <div className="modal-desc p-0">
                            <div className="col-lg-8 col-12 mx-auto">
                                <div type="button" className="modal-close position-absolute rounded-circle d-lg-block d-none" data-bs-dismiss="modal" onClick={onClose}>
                                    <Svg modalClose />
                                </div>
                                <div type="button" className="modal-close position-absolute rounded-circle d-lg-none" data-bs-dismiss="modal" onClick={onClose}>
                                    <Svg resModalClose />
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modals
