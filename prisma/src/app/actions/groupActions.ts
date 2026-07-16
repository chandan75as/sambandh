"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const MOCK_USER_ID = "cl_mock_user_id_001"; // Mocked for architecture demo

export async function createGroup(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const isPrivate = formData.get("isPrivate") === "on";

  if (!name) return;

  const group = await prisma.group.create({
    data: {
      name,
      description,
      isPrivate,
      ownerId: MOCK_USER_ID,
      members: {
        create: {
          userId: MOCK_USER_ID,
        }
      }
    },
  });

  revalidatePath("/groups");
  redirect(`/groups/${group.id}`);
}
