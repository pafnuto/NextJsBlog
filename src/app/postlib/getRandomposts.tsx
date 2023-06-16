import { IPost } from "../interfaces/";
import getAllPosts from "./getAllposts";

export default async function getRandomPosts(): Promise<IPost[]> {
  const posts = await getAllPosts();
  const randomPosts = [];

  while (randomPosts.length < 3) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    randomPosts.push(randomPost);
  }

  return randomPosts;
}