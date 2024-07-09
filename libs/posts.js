import graphqlRequest from "./graphqlRequest";

const getAllPosts = async () => {
  const query = {
    query: `query NewQuery {
  posts {
    nodes{
      date
      slug
      title
      excerpt(format: RENDERED)
      featuredImage{
        node{
          mediaDetails{
            file
            sizes{
              sourceUrl
              width
              height
            }
          }
        }
      }
      categories{
        nodes{
          name
          slug
        }
      }
      
    }
    pageInfo{
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}`,
  };
  const resJson = await graphqlRequest(query);
  return resJson.data.posts;
};

export default getAllPosts;
