import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Emergency from '../components/emergency';
import Header from '../components/header';
import Navigation from '../components/navigation';
import AddOrderItem from './_add-order-item';
import Modal from '../components/modal';
import Certificate from '../components/certificate';
import SellerItem from './_seller-item';

//Styling
import '../styles/app.scss';

//Data
import orderList from '../data/order-list';
import sellers from '../data/sellers';

class OrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: orderList,
            openModal: false,
            selectedProduct: '',
            allSellers: sellers,
            availableProducts: [

            ],
            sellerSelector: false
        };
    }

    _addItem = (item) => {
        this.setState({
            orders: [...this.state.orders, item],
        });
        this._toggleModal();
    }

    _toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    }

    _removeOrder = (orderIndex) => {
        this.setState({
            orders: this.state.orders.filter((order, index) => index != orderIndex)
        });
    }

    _openSelerSelector = (index) => {
        this.setState({
            selectedProduct: this.state.orders[index],
            sellerSelector: true
        })
    }

    _selectSeler = (unitPrice) => {
        const updatedOrders = [...this.state.orders];
        updatedOrders[this.state.orders.length - 1] = {
            ...updatedOrders[updatedOrders.length - 1],
            price: unitPrice * updatedOrders[updatedOrders.length - 1].amount,
            arrival_date: '08/04/2020'
        }

        this.setState({
            sellerSelector: false,
            orders: [...updatedOrders]
        })
    }

    render() {
        const { allSellers, openModal, orders, itemModalKey, selectedProduct, sellerSelector } = this.state; //Variables
        const { _addItem, _removeOrder, _openSelerSelector, _selectSeler, _toggleModal } = this; //Actions
        return (
            <div className="container">
                <Emergency />
                <Header />
                <div className="content pt-2 d-flex flex-column">
                    <div>
                        <h2 className="m-0">Create new order</h2>
                    </div>
                    <div className="d-flex flex-row mt-3">
                        <Link to="/select-seller" className="btn btn-primary px-3">Submit</Link>
                        <button className="btn btn-outline-primary ml-3" onClick={_toggleModal}>+ Add</button>
                    </div>
                    <div className="mt-3">
                        <table className="table table-striped">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product category</th>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Est. delivery</th>
                                    <th scope="col">Certificates</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{order.productCategory}</td>
                                            <td>
                                                {order.productName.length > 25 ? order.productName.substring(0, 24) + "..." : order.productName}
                                            </td>
                                            <td>{order.amount}</td>
                                            <td>
                                                {order.price > 0 && (
                                                    <span>{order.price} EUR</span>
                                                )}
                                                {!order.price && (
                                                    <button className="btn btn-primary" onClick={() => _openSelerSelector(index)}>Select Seller</button>
                                                )}
                                            </td>
                                            <td>
                                                {order.arrival_date && (
                                                    <span>{order.arrival_date}</span>
                                                )}
                                                {!order.arrival_date && (
                                                    <button className="btn btn-primary" onClick={() => _openSelerSelector(index)}>Select Seller</button>
                                                )}
                                            </td>
                                            <td>{order.certificates.map(certificate => <Certificate type={certificate} className="mr-2" />)}</td>
                                            <td>
                                                <i className="fas fa-edit text-secondary"></i>
                                                <i className="fas fa-trash-alt ml-3 text-danger" onClick={() => _removeOrder(index)}></i>
                                            </td>
                                        </tr>)
                                })}

                            </tbody>
                        </table>
                    </div>

                    {sellerSelector && (
                        <div className="seller-list mt-4">
                            <div className="header bg-primary text-white d-flex align-items-center">
                                <span>Choose Supplier: {selectedProduct.productName}</span>
                            </div>
                            {allSellers.map(seller => <SellerItem seller={seller} selectSeller={_selectSeler} units={selectedProduct.amount} />)}
                        </div>
                    )}
                    <Modal openModal={openModal} toggleModal={_toggleModal} >
                        <AddOrderItem toggleModal={_toggleModal} addItem={_addItem} />
                    </Modal>
                </div>
            </div>
        );
    }
}
export default OrderPage;