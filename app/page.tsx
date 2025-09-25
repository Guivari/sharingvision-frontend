import Table from "./components/Table";
import fs from "fs";
import path from "path";
import Link from "next/link"; // <--- Import Link for navigation

export default function Home() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { posts } = JSON.parse(jsonData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Posts</h1>

        {/* Button to navigate to the "Add New Post" page */}
        <Link href="/addnew">
          <button className="btn btn-primary">Add New Post</button>
        </Link>
      </div>

      <Table posts={posts} initialTab="published" />
    </div>
  );
}
