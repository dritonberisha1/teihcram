import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const CustomBackgroundImage = (props) => {
    const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "photo.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
  `)

    return <BackgroundImage className="background-image" fluid={data.image.childImageSharp.fluid} fadeIn>
        {props.children}
    </BackgroundImage>
}

export default CustomBackgroundImage
