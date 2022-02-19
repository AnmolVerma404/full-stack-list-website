import axios from "axios";

const url = "http://localhost:5000/posts"; //This will collect all the data from server to be used in the client

export const fetchPosts = () => axios.get(url);
//Below function will get full post inputed by user from form
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`,updatedPost);
