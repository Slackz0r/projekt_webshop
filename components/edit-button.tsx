"use client";

import { SquarePen } from "lucide-react";
import { useState } from "react";
import EditModal from "./edit-modal";
import { Product } from "@/app/types";

export default function EditButton({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <SquarePen />
      </button>

      {isOpen && <EditModal product={product} onClose={() => setIsOpen(false)} />}
    </>
  );
}
