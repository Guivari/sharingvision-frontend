'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "../components/TextField";
import TextareaField from "../components/TextareaField";

export default function AddNewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title,
      category,
      content,
      status: "draft",
    };

    router.push("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add new post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <TextField      label="Title"     value={title}     onChange={setTitle} />
          <TextField      label="Category"  value={category}  onChange={setCategory} />
        </div>
        <div>
          <TextareaField  label="Content"   value={content}   onChange={setContent} />
        </div>
        <button type="submit" className="btn rounded-md">Create Post</button>
      </form>
    </div>
  );
}
