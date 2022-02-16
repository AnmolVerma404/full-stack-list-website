import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
//Below function will get full post inputed by user from form
export const createPost = (newPost) => axios.post(url, newPost);
// export const createPost = (newPost) => {
//     console.log(newPost);
// };
