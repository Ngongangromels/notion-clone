"use client"

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DocumentsPage = () => {
const { user } = useUser()
const create = useMutation(api.documents.create)
const router = useRouter()

const onCreate = () => {
    const promise = create({titlee: "Untitled",})
       .then((documentId) => router.push(`/documents/${documentId}`))
    toast.promise(promise, {
        loading: "Creating a new note...",
        success: "New note created!",
        error: "Failed to create note"
    })
}

  return (
    <div className="h-full flex flex-col items-center justify-center space-Y-4">
      <Image src="/Empty.png" alt="Empty" width="300" height="300" />
      <h2 className=" text-lg font-medium ">
        Welcome to Jotion {user?.username || "Romels"}
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
