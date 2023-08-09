import React from 'react';
import '../global.css';

import Page from '../templates/Page';
import { graphql, useStaticQuery } from 'gatsby';


const Bots = () => {
  const BotsPageData = useStaticQuery(graphql`
  query{
    allBotsJson(filter: {}) {
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
const HeroData = BotsPageData.allBotsJson.edges[0].node.content
const AboutData = BotsPageData.allBotsJson.edges[1].node.content
const BenefitsData = BotsPageData.allBotsJson.edges[2].node.content
const ServiceData = BotsPageData.allBotsJson.edges[3].node.content
const FaqData = BotsPageData.allBotsJson.edges[4].node.content

return (
     <Page hero = {HeroData} about={AboutData} benefits={BenefitsData} service={ServiceData} faq={FaqData} />
  );
};

export default Bots;

