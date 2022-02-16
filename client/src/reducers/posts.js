/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCT_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};