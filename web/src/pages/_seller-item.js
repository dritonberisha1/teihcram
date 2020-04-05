import React from 'react';
import Flag from '../components/flag';
import Certificate from '../components/certificate';

const SelectSellerPage = (props) => {
    const { seller, units } = props;
    const { selectSeller } = props; //Action
    return (
        <div className="seller-element my-2 d-flex flex-row py-4 px-3">
            <div className="info d-flex flex-column justify-content-lg-between">
                <div className="seller-info mb-4">
                    <div className="seller-name">
                        <h3 className="m-0">{seller.name}<span className={`badge ml-3  ${seller.rating >= 8 && 'badge-high'} ${seller.rating < 8 && seller.rating > 6.9 && 'badge-medium'} ${seller.rating < 7 && 'badge-low'}`}>{seller.rating}</span></h3>
                    </div>
                    <div className="product-origin d-flex flex-row align-items-center mb-3">
                        <Flag country={seller.origin.toLowerCase()} /><p className="font-weight-light m-0 pl-2">{seller.origin}</p>
                    </div>
                </div>
                <div className="product-info d-flex flex-row">
                    <div className="available-units d-flex flex-column">
                        <label>Abailable units</label>
                        <span>{seller.availableUnits}</span>
                    </div>
                    <div className="moq d-flex flex-column col">
                        <label>MOQ</label>
                        <span>{seller.moq}</span>
                    </div>
                    <div className="unit-price d-flex flex-column col">
                        <label>Unit price</label>
                        <span>{seller.unitPrice}</span>
                    </div>
                    <div className="delivery-time d-flex flex-column col">
                        <label>Delivery time</label>
                        <span>{seller.deliveryTime}</span>
                    </div>
                    <div className="certification d-flex flex-column col">
                        <label>Certification</label>
                        <span>
                            {seller.certificates.map(certificate => <Certificate type={certificate} className="mr-2" />)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="action d-flex flex-row align-items-center ml-5">
                <div className="units">
                    <label>Units:</label>
                    <input className="form-control" type="number" name="units" value={units} disabled />
                </div>
                <button className="ml-4 btn btn-primary" onClick={() => selectSeller(seller.unitPrice)}>Select seller</button>
            </div>
        </div>
    )
}

export default SelectSellerPage;