import { Suspense } from "react";
import PostsList from "./post-list";

export default function Full1() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-3 lg-px-16">
      <h1 className="text-3xl my-4 font-bold">Posts</h1>
      <Suspense fallback="Loading....">
        <PostsList />
      </Suspense>
    </div>
  );
}

// export default async function PostsList() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   const response = await fetch("https://dummyjson.com/posts?limit=10");
//   const data = await response.json();

//   return (
//     <div>
//       <ul className="text-center">
//         {data.posts.map((post: { id: number; title: string }) => (
//           <li key={post.id} className="mb-3 text-lg font-medium">
//             <Link href={`/course1/posts/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
