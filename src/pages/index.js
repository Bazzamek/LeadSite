import React from 'react';
import '../global.css';

import Page from '../templates/Page';
import { graphql, useStaticQuery } from 'gatsby';


const Index = () => {
  const HomePageData = useStaticQuery(graphql`
  query{
    allHomeJson(filter: {}) {
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
const HeroData = HomePageData.allHomeJson.edges[0].node.content
const AboutData = HomePageData.allHomeJson.edges[1].node.content
const BenefitsData = HomePageData.allHomeJson.edges[2].node.content
const ServiceData = HomePageData.allHomeJson.edges[3].node.content
const FaqData = HomePageData.allHomeJson.edges[4].node.content

return (
     <Page hero = {HeroData} about={AboutData} benefits={BenefitsData} service={ServiceData} faq={FaqData} />
  );
};

export default Index;

