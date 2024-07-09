const graphqlRequest = async (query) => {
  const url = "http://localhost/gwi-tuk/graphql";
  const headers = {
    "Content-type": "application/json",
  };
  const rest = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  const resJson = await rest.json();
  return resJson;
};

export default graphqlRequest;
