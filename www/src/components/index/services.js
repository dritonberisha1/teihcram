import React from "react";
import FactoryLogo from '../../images/icons/factory.svg';
import PieChartLogo from '../../images/icons/pie-chart.svg';
import CommentsDollarLogo from '../../images/icons/comments-dollar-solid.svg';
import ShieldCheckmarkLogo from '../../images/icons/shield-checkmark.svg';
import ThumbsUpLogo from '../../images/icons/thumbs-up.svg';
import HospitalBoxLogo from '../../images/icons/hospital-box.svg';

const Services = (props) => {
    return (<div className="services d-flex">
        <div className="suppliers col mr-2">
            <div className="top-section">
                <div className="logo">
                    <FactoryLogo width={38} />
                </div>
                <h3 className="mt-1">For suppliers</h3>
                <p className="subtitle mt-3 mr-lg-9">
                    Our specialists have years of experience in selling medical equipment around Europe and North America
                </p>
            </div>
            <div className="bottom-section">
                <h4>Related Services</h4>
                <div className="first-subsection">
                    <div className="logo">
                        <PieChartLogo />
                    </div>
                    <h5 className="mt-1">
                        Stock management system
                    </h5>
                    <p className="mr-lg-10">
                        Direct access to hospitals, ensuring long-term relationships.
                    </p>
                </div>
                <div className="second-subsection">
                    <div className="logo">
                        <CommentsDollarLogo />
                    </div>
                    <h5 className="mt-1">
                        Direct contact with medical institutions
                    </h5>
                    <p className="mr-lg-10">
                        Direct access to hospitals, ensuring long-term relationships.
                    </p>
                </div>
            </div>
        </div>
        <div className="medical col ml-2">
            <div className="top-section">
                <div className="logo">
                    <HospitalBoxLogo width={38} />
                </div>
                <h3 className="mt-1">For suppliers</h3>
                <p className="subtitle mt-3 mr-lg-9">
                    Our specialists have years of experience in selling medical equipment around Europe and North America
                </p>
            </div>
            <div className="bottom-section">
                <h4>Related Services</h4>
                <div className="first-subsection">
                    <div className="logo">
                        <ShieldCheckmarkLogo />
                    </div>
                    <h5 className="mt-1">
                        Certified Manufacturers
                    </h5>
                    <p className="mr-lg-10">
                        Product quality certification compliance checked
                    </p>
                </div>
                <div className="second-subsection">
                    <div className="logo">
                        <ThumbsUpLogo />
                    </div>
                    <h5 className="mt-1">
                        Quality Medical Equipment
                    </h5>
                    <p className="mr-lg-10">
                        Medical equipment according to medical quality standards
                    </p>
                </div>
            </div>
        </div>
    </div>)
}

export default Services
