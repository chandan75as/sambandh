import Link from "next/link";
import { PenSquare } from "lucide-react";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/shared/PostCard";

export default async function FeedPage() {
  // Fetch only approved posts for the public feed
  const posts = await prisma.post.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: { name: true, isPremium: true, role: true }
      }
    }
  });

  return (
    <div className="w-full">
      {/* Feed Header */}
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Community Feed</h1>
          <p className="text-sm text-slate-500">Discover top stories and updates.</p>
        </div>
        <Link 
          href="/feed/submit" 
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-hover transition-colors text-sm shadow-sm"
        >
          <PenSquare className="w-4 h-4" />
          Submit News
        </Link>
      </div>

      {/* Feed Content */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500">No news verified yet. Be the first to submit!</p>
          </div>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}
