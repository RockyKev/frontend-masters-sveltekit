async function getBlogPosts(host) {
  const url = new URL("blog.json", "http://" + host).href;
  const res = await fetch(url);
  if (res.ok) {
    const { posts } = await res.json();
    return posts;
  } else {
    throw new Error("Failed to fetch " + url);
  }
}
export { getBlogPosts as g };
