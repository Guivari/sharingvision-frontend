'use client';

import { useState } from "react";
import TableRow from "./TableRow";
import TableNav from "./TableNav";

type Tab = "published" | "draft" | "trashed";

interface Post {
  id: string;
  title: string;
  category: string;
  content: string;
  status: Tab;
}

interface TableProps {
  posts: Post[];
  initialTab?: Tab;
}

export default function Table({ posts: initialPosts, initialTab = "published" }: TableProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const filteredPosts = posts.filter((post) => post.status === activeTab);

  const handleTrash = (id: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, status: "trashed" } : post
      )
    );
  };

  return (
    <div>
      <TableNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="overflow-x-auto">
        <table className="table bg-gray-700 rounded-t-none">
          <thead>
            <tr className="bg-gray-900">
              <th className="text-left">Title</th>
              <th className="text-center">Category</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <TableRow
                key={post.id}
                id={post.id}
                title={post.title}
                category={post.category}
                onTrash={() => handleTrash(post.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
