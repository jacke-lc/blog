import { getCollection } from 'astro:content';

export async function getAllPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await getAllPosts();

  return posts.filter((post) => post.data.featured).slice(0, limit);
}
