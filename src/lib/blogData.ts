// fetch posts data from an API
export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });
  return res.json();
}

// fetch users data from an API
export async function getUsers(userId: { userId: object }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Object.values(userId)}`);
  return res.json();
} 
 
// fetch post data from an API
export async function getPost(slug: { slug: number }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: "no-store" });
  return res.json();
}  
  
