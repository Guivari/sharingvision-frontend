import Table from "./components/Table";
import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Home() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { posts } = JSON.parse(jsonData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Link href="/addnew">
          <button className="btn">Add New Post</button>
        </Link>
      </div>
      <Table posts={posts} initialTab="published" />
    </div>
  );
}
