import { getCollection } from 'astro:content';
import { allowedTags } from '@/lib/tags';

export async function getAllPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await getAllPosts();

  return posts.filter((post) => post.data.featured).slice(0, limit);
}

export async function getTagStats() {
  const posts = await getAllPosts();

  return allowedTags.map((tag) => ({
    tag,
    count: posts.filter((post) => post.data.tags?.includes(tag)).length
  }));
}
