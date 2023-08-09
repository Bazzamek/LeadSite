import React from 'react';
import '../global.css';

import Page from '../templates/Page';
import { graphql, useStaticQuery } from 'gatsby';


const Marketing = () => {
  const MarketinPageData = useStaticQuery(graphql`
  query{
    allMarketingJson(filter: {}) {
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
const HeroData = MarketinPageData.allMarketingJson.edges[0].node.content
const AboutData = MarketinPageData.allMarketingJson.edges[1].node.content
const BenefitsData = MarketinPageData.allMarketingJson.edges[2].node.content
const ServiceData = MarketinPageData.allMarketingJson.edges[3].node.content
const FaqData = MarketinPageData.allMarketingJson.edges[4].node.content

return (
     <Page hero = {HeroData} about={AboutData} benefits={BenefitsData} service={ServiceData} faq={FaqData} />
  );
};

export default Marketing;

