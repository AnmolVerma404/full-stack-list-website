/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
    case "UPDATE":
    case "LIKE"://As LIKE and UPDATE have same return so we can write them one after other
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
