import React, { Component } from 'react';
import Modal from '../components/modal';
import Select from 'react-select';

import productCategoriesJson from '../data/product-categories';
import productsJson from '../data/products';

const DEFAULT_STATE = {
    allProducts: productsJson,
    products: productsJson,
    productCategories: productCategoriesJson,
    selectedProductCategory: '',
    selectedProduct: '',
    amount: 0,
    certificates: {
        ce: false,
        iso: false,
        fda: false
    }
}
class AddOrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
    }

    _getCertificateAsString = () => {
        const certificates = Object.keys(this.state.certificates);
        const selectedCertificates = [];
        certificates.forEach(certificate => {
            if (this.state.certificates[certificate])
                selectedCertificates.push(certificate);
        });
        return selectedCertificates;
    }

    _addItem = () => {
        const { amount, certificates, selectedProduct, selectedProductCategory } = this.state;
        const orderItem = {
            amount,
            certificates: this._getCertificateAsString(),
            productCategory: selectedProductCategory.value,
            productName: selectedProduct.value
        }
        this.setState({ ...DEFAULT_STATE });
        this.props.addItem(orderItem);
    }

    _selectProductCategory = (productCategory) => {
        const { value } = productCategory;
        this.setState({
            selectedProductCategory: productCategory,
            products: this.state.allProducts.filter(product => product.category === value)
        });
    }

    _selectProduct = (product) => {
        this.setState({
            selectedProduct: product
        });
    }

    _onChangeAmount = (event) => {
        const value = event.target.value;
        this.setState({
            amount: value
        });
    }

    _onChangeCertificate = (event) => {
        const value = event.target.checked;
        const name = event.target.name;

        this.setState({
            certificates: {
                ...this.state.certificates,
                [name]: value
            }
        });
    }

    render() {
        const { toggleModal } = this.props;
        const { amount, certificates, products, productCategories, selectedProductCategory, selectedProduct } = this.state; //Variables
        const { _addItem, _selectProductCategory, _selectProduct, _onChangeAmount, _onChangeCertificate } = this; //Actions

        return (
            <div className="order-item-form">
                <h5>Add order item</h5>

                <div className="form-group">
                    <label>Product category</label>
                    <Select
                        value={selectedProductCategory}
                        onChange={_selectProductCategory}
                        isClearable={true}
                        isSearchable={true}
                        name="productCategory"
                        options={productCategories.map(productCategory => { return { value: productCategory, label: productCategory } })}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Product name</label>
                    <Select
                        value={selectedProduct}
                        onChange={_selectProduct}
                        isClearable={true}
                        isSearchable={true}
                        name="product"
                        options={products.map(product => { return { value: product.name, label: product.name } })}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Amount</label>
                    <input type="number" className="form-control" value={amount} onChange={_onChangeAmount} />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Certificates</label>
                    <div className="">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="ce" type="checkbox" id="inlineCheckbox1" checked={certificates.ce} onChange={_onChangeCertificate} />
                            <label className="form-check-label">CE</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="iso" type="checkbox" id="inlineCheckbox2" checked={certificates.iso} onChange={_onChangeCertificate} />
                            <label className="form-check-label">ISO</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="fda" type="checkbox" id="inlineCheckbox3" checked={certificates.fda} onChange={_onChangeCertificate} />
                            <label className="form-check-label">FDA</label>
                        </div>
                    </div>
                </div>

                <div className="action-buttons mt-4 d-flex justify-content-start">
                    <button className="btn btn-primary px-4" onClick={_addItem}>Add</button>
                    <button className="btn btn-secondary ml-3" onClick={toggleModal}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default AddOrderItem;