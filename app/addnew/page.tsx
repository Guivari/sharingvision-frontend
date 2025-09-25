'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you would normally send a request to your backend or update local storage
    const newPost = {
      id: Date.now().toString(),
      title,
      category,
      content,
      status: "draft", // default status
    };

    // For now, we just log it
    console.log("New Post:", newPost);

    // Optionally, redirect back to the home page
    router.push("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea textarea-bordered w-full"
            rows={6}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
}
