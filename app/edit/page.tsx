import Table from "../components/Table";
import fs from "fs";
import path from "path";




export default function Home() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { posts } = JSON.parse(jsonData);


  return (
    <div>

      <Table posts={posts} initialTab="published" />
      
    </div>
  );
}

