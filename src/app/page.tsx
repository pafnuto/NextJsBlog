import { PostList } from "./components/"; 
import { IPost } from "./interfaces/";
import { getRandomPosts } from "./postlib";


export default async function Home() {
  const randomPosts: IPost[] = await getRandomPosts();

  return (
    <section className="flex flex-col max-w-2xl gap-6 mx-auto">
      <PostList posts={randomPosts} />
    </section>
  );
}