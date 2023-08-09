import React from 'react';
import '../global.css';

import Page from '../templates/Page';
import { graphql, useStaticQuery } from 'gatsby';


const Seo = () => {
  const SeoPageData = useStaticQuery(graphql`
  query{
    allSeoJson(filter: {}) {
    edges {
      node {
        name
        content {
          title
          description
          benefits {
            alt
            content
            imgTitle
            title
            icon {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          services {
            alt
            button
            content
            imgTitle
            title
            icon {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            link
          }
          faq {
            answer
            question
          }
        }
      }
    }
  }
}
`)
const HeroData = SeoPageData.allSeoJson.edges[0].node.content
const AboutData = SeoPageData.allSeoJson.edges[1].node.content
const BenefitsData = SeoPageData.allSeoJson.edges[2].node.content
const ServiceData = SeoPageData.allSeoJson.edges[3].node.content
const FaqData = SeoPageData.allSeoJson.edges[4].node.content

return (
     <Page hero = {HeroData} about={AboutData} benefits={BenefitsData} service={ServiceData} faq={FaqData} />
  );
};

export default Seo;

