"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// In a real app, you'd extract the user ID from the session via getServerSession.
// For this architecture, we will mock a default User ID to ensure the DB relational inserts work.
const MOCK_USER_ID = "cl_mock_user_id_001"; 

export async function submitPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) return;

  await prisma.post.create({
    data: {
      title,
      content,
      authorId: MOCK_USER_ID,
      status: "PENDING", // Regular users submit to the queue
    },
  });

  revalidatePath("/feed");
  revalidatePath("/admin/queue");
  redirect("/feed");
}

export async function updatePostStatus(postId: string, status: "APPROVED" | "REJECTED") {
  await prisma.post.update({
    where: { id: postId },
    data: { status },
  });

  revalidatePath("/feed");
  revalidatePath("/admin/queue");
}
