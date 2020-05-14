import React from "react"
import { Link } from "gatsby"
import BackgroundImage from '../components/background-image';
import Img from '../components/image';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Services from '../components/index/services'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="first-section">
      <Img />
      <div className="top-container">
        <div className="logo"></div>
        <h2>
          We help medical institutions and medical suppliers
           </h2>
        <p className="mt-3">
          Our service helps hospitals and medical suppliers to find common grounds faster
           </p>
        <div className="buttons">
          <button className="btn btn-primary rounded-0"> Contact us</button>
          <button className="btn btn-outline-secondary rounded-0"> How this works?</button>
        </div>
      </div>
      <Services />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
