import axios from "axios";

const url = "https://anmol-project.herokuapp.com/posts"; //This will collect all the data from server to be used in the client

export const fetchPosts = () => axios.get(url);
//Below function will get full post inputed by user from form
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
