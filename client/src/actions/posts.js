import * as api from "../api/index.js";

export const getPosts = (item) => async (dispatch) => {
  try {
    // console.log(item);
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
//async as creating post is an asynchronous activity
export const createPost = (post) => async (dispatch) => {
  console.log(post);
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
