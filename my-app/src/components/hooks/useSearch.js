const callBooksApi = async (searchQuery) => {
  const query = searchQuery.data;
  const apiURL = url + query + "&maxResults=9" + "&key=" + key;

  try {
    const response = await fetch(apiURL);
    console.log(response);
    const jsonResponse = await response.json();
    const items = jsonResponse.items;
    console.log(items);
    setApiResponse(items);
  } catch (err) {
    alert(err);
  }
};
console.log(apiResponse);
