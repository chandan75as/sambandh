import { prisma } from "@/lib/prisma";
import PostCard from "@/components/shared/PostCard";
import { ShieldAlert } from "lucide-react";

export default async function AdminQueuePage() {
  // In production, you would add an authorization check here to ensure the user session is VERIFIED_USER or ADMIN.
  
  // Fetch pending posts waiting for approval
  const pendingPosts = await prisma.post.findMany({
    where: { status: "PENDING" },
    orderBy: { createdAt: "asc" }, // Oldest first for fair reviewing
    include: {
      author: {
        select: { name: true, isPremium: true, role: true }
      }
    }
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6 bg-amber-50 p-4 rounded-xl border border-amber-200">
        <ShieldAlert className="w-6 h-6 text-amber-600" />
        <div>
          <h1 className="text-lg font-bold text-amber-900">Editor Queue</h1>
          <p className="text-sm text-amber-700">Review community submissions before publishing to the main feed.</p>
        </div>
      </div>

      <div className="space-y-4">
        {pendingPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500 font-medium">The queue is completely empty!</p>
            <p className="text-sm text-slate-400 mt-1">All community submissions have been reviewed.</p>
          </div>
        ) : (
          pendingPosts.map((post) => (
            <PostCard key={post.id} post={post} isAdminView={true} />
          ))
        )}
      </div>
    </div>
  );
}
