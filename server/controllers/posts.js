import PostMessage from "../models/postMessage.js";

//This is just for code clearity purpose we can also write every route in /routes/posts.js
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find(); //This take time therefor it's asynchronous
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body; //This will take input from form
  const newPost = new PostMessage(post); //pass the input to postSchema to add to database
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
