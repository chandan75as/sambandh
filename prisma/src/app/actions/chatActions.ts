"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const MOCK_USER_ID = "cl_mock_user_id_001"; // Mocked for architecture demo

export async function sendGlobalMessage(formData: FormData) {
  const content = formData.get("content") as string;

  if (!content || content.trim() === "") return;

  await prisma.message.create({
    data: {
      content,
      senderId: MOCK_USER_ID,
      // groupId remains null to indicate Global Chat
    },
  });

  revalidatePath("/chat");
}
