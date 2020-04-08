import React from "react"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
  allShopifyProduct {
    nodes {
      id
      title
      images {
        localFile {
          childImageSharp {
            fixed(width: 100, fit: COVER, height: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
      variants {
        title
        priceV2 {
          amount
          currencyCode
        }
        sku
      }
      productType
      tags
    }
  }
}
`
const Product = ({product}) => (
  <div>
  <Image fixed={product.images[0].localFile.childImageSharp.fixed}/>
    <h2>{product.title}</h2>
    <p>{product.productType}</p>
    <p>{product.description}</p>
  </div>
)
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {data.allShopifyProduct.nodes.map(product => <Product key={product.id} product={product} />)}
  </Layout>
)

export default IndexPage
