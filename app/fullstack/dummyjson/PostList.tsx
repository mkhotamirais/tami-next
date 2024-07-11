import Link from "next/link";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <div>
      <ul className="text-center">
        {data.posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-3 text-lg font-medium">
            <Link href={`/fullstack/dummyjson/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
