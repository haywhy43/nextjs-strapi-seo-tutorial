import type { NextPage } from "next";
import client from "../apollo-client";
import query from "../graphql/HomePageQuery";

export async function getStaticProps() {
  const { data } = await client.query({
    query,
  });

  // data being fetched through the query. In this case we get the seo object which contains the title and meta tags 
  /**
   * content = {
   *    seo: {
   *      Title: <whatever title you set on strapi dashboard>,
   *      seo_meta_tags: {
   *        data: {attributes: {property: <set-data>, content: <set-data>}} 
   *      }
   *    }
   * }
   */
  const content = data.homePage.data.attributes;

  return {
    props: {
      content,
    },
  };
}

const Home: NextPage = () => {
  return <div></div>;
};

export default Home;
