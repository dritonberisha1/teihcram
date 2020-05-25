import React from "react"
import { Link } from "gatsby"
import BackgroundImage from '../components/images/background-img';
import DiagramImage from '../components/images/diagram-img';

//Components
import Services from '../components/index/services';
import ContactForm from '../components/index/contact-form';
import ContactInfo from '../components/index/contact-info';

import Footer from '../components/footer';
import Layout from "../components/layout";
import SEO from "../components/seo";
import MainLogo from '../components/logo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="first-section">
      <BackgroundImage />
      <div className="top-container">
        <div className="logo"> <MainLogo /></div>
        <h2>
          Almost help medical institutions and medical suppliers
           </h2>
        <p className="mt-3 secondary-text">
          Our service helps hospitals and medical suppliers to find common grounds faster
           </p>
        <div className="buttons">
          <Link to="#contact-form" className="btn btn-primary rounded-0"> Contact us</Link>
          <button className="btn btn-outline-secondary rounded-0"> How this works?</button>
        </div>
      </div>
      <Services />
    </div>
    <div className="second-section p-6 d-flex justify-content-center align-items-center flex-column">
      <div>
        <h3 className="">How This Works?</h3>
      </div>
      <div className="diagram mt-4">
        <DiagramImage />
      </div>
    </div>
    <div className="third-section">
      <ContactForm />
    </div>
    <div className="fourth-section">
      <ContactInfo />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
