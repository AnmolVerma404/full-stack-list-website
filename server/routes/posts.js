import express from "express";

import { getPosts, createPost, updatePost,deletePost } from "../controllers/posts.js"; //As this is now react so we have to write .js while import

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id",deletePost);

export default router;
