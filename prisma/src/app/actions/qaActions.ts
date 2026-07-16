"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const MOCK_USER_ID = "cl_mock_user_id_001"; // Mocked for architecture demo

export async function askProblem(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title || !description) return;

  const problem = await prisma.problem.create({
    data: {
      title,
      description,
      authorId: MOCK_USER_ID,
    },
  });

  revalidatePath("/qa");
  redirect(`/qa/${problem.id}`);
}

export async function submitSolution(formData: FormData) {
  const content = formData.get("content") as string;
  const problemId = formData.get("problemId") as string;

  if (!content || !problemId) return;

  await prisma.solution.create({
    data: {
      content,
      problemId,
      authorId: MOCK_USER_ID,
    },
  });

  revalidatePath(`/qa/${problemId}`);
}
