import { Suspense } from "react";
import PostsList from "@/components/youtube/bytegrad-1/posts-list";

export default function Posts() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-3 lg-px-16">
      <h1 className="text-3xl my-4 font-bold">Posts</h1>
      <Suspense fallback="Loading....">
        <PostsList />
      </Suspense>
    </div>
  );
}
