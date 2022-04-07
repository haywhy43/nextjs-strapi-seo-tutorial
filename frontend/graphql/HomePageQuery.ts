import { gql } from "@apollo/client";

export default gql`
  # Write your query or mutation here
  query HomePage {
    homePage {
      data {
        attributes {
          seo {
            data {
              attributes {
                Title
                seo_meta_tags {
                  data {
                    attributes {
                      property
                      content
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
