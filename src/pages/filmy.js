import React from 'react';
import '../global.css';

import Page from '../templates/Page';
import { graphql, useStaticQuery } from 'gatsby';


const Films = () => {
  const FilmPageData = useStaticQuery(graphql`
  query{
    allFilmsJson(filter: {}) {
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
const HeroData = FilmPageData.allFilmsJson.edges[0].node.content
const AboutData = FilmPageData.allFilmsJson.edges[1].node.content
const BenefitsData = FilmPageData.allFilmsJson.edges[2].node.content
const ServiceData = FilmPageData.allFilmsJson.edges[3].node.content
const FaqData = FilmPageData.allFilmsJson.edges[4].node.content

return (
     <Page hero = {HeroData} about={AboutData} benefits={BenefitsData} service={ServiceData} faq={FaqData} />
  );
};

export default Films;

