'use client';

import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";

interface TableRowProps {
  id: string;
  title: string;
  category: string;
  onTrash: () => void;
}

export default function TableRow({ id, title, category, onTrash }: TableRowProps) {
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td className="flex gap-2">
        <Link href={`/posts/edit`}>
          <button className="btn btn-large btn-circle btn-ghost">
            <FaEdit />
          </button>
        </Link>

        <button onClick={onTrash} className="btn btn-large btn-circle btn-ghost">
          <FaRegTrashAlt />
        </button>
      </td>
    </tr>
  );
}
