export default (posts = [], action) => {
  //posts is state
  switch (action) {
    case "FETCT_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
