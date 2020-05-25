import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        aboutCompany: {
            companyName: '',
            buyer: false,
            seller: false,
            other: false
        },
        representativeDetails: {
            representativeName: '',
            representativeSuername: '',
            phoneNumber: '',
            emailAddress: ''
        },
        message: {
            yourMessage: '',
            receiveNewsletter: false,
            agreeWithTerms: false
        }
    }

    render() {
        const { aboutCompany, representativeDetails, message } = this.state;
        return (
            <div className="p-5" id="contact-form">
                <div className="contact-us b-bottom pb-4">
                    <h3> Contact Us</h3>
                    <p>Our specialists will onboard you to our system and get you started with basics</p>
                </div>
                <div className="segment b-bottom py-4 d-flex flex-row">
                    <div className="col p-0">
                        <h3 className="segment-title"> About company</h3>
                        <p>Introduce your company and select type to match with the right experts</p>
                    </div>
                    <div className="col p-0">
                        <div className="d-flex flex-column">
                            <h3>
                                COMPANY NAME
                            </h3>
                            <input className="w-75 company-name" type="text" />
                        </div>
                        <div className="mt-4 business-type">
                            <h3>
                                BUSINESS TYPE
                            </h3>
                            <div className="pl-2">
                                <div className="d-flex mt-2 align-items-center">
                                    <input type="radio" id="male" name="gender" value={aboutCompany.buyer} />
                                    <label for="male">Buyer</label>
                                </div>
                                <div className="d-flex mt-2 align-items-center">
                                    <input type="radio" id="male" name="gender" value={aboutCompany.seller} />
                                    <label for="male">Seller</label>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                    <input type="radio" id="male" name="gender" value={aboutCompany.other} />
                                    <label for="male">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="segment b-bottom py-4 d-flex flex-row">
                    <div className="col p-0">
                        <h3 className="segment-title"> Representative details</h3>
                        <p>Set main contact details for representative</p>
                    </div>
                    <div className="col p-0 inputs">
                        <div className="d-flex flex-column">
                            <label for="company-name">
                                REPRESENTATIVE NAME
                            </label>
                            <input id="company-name" className="w-75 company-name" type="text" value={representativeDetails.representativeName} />
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <label for="company-name">
                                REPRESENTATIVE SURNAME
                            </label>
                            <input id="company-name" className="w-75 company-name" type="text" value={representativeDetails.representativeSuername} />
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <label for="company-name">
                                PHONE NUMBER
                            </label>
                            <input id="company-name" className="w-75 company-name" type="text" value={representativeDetails.phoneNumber} placeholder="+44" />
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <label for="company-name">
                                EMAIL ADDRESS
                            </label>
                            <input id="company-name" className="w-75 company-name" type="text" value={representativeDetails.emailAddress} placeholder="example@email.com" />
                        </div>
                    </div>
                </div>
                <div className="segment b-bottom py-4 d-flex flex-row">
                    <div className="col p-0">
                        <h3 className="segment-title"> Message, news and terms</h3>
                        <p>Please, list all details available about possible cooperation</p>
                    </div>
                    <div className="col p-0 inputs">
                        <div className="d-flex flex-column">
                            <label for="company-name">
                                YOUR MESSAGE
                            </label>
                            <textarea rows="10" id="company-name" className="w-75 company-name" type="text" value={message.yourMessage} placeholder="Type here" />
                        </div>
                        <div className="business-type pl-2 mt-3">
                            <div className="d-flex align-items-center">
                                <input id="newsletter" type="checkbox" value={message.receiveNewsletter}/>
                                <label for="newsletter">
                                    I want receive e-mail newsletter
                            </label>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <input id="term-and-conditions" type="checkbox" value={message.agreeWithTerms} />
                                <label for="term-and-conditions">
                                    I agree with terms & conditions
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="segment pt-5 d-flex flex-row">
                    <div className="col p-0"></div>
                    <div className="col p-0">
                        <button className="submit btn btn-primary">
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;