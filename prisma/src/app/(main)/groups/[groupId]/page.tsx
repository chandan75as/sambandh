import { prisma } from "@/lib/prisma";
import { ArrowLeft, Users, Lock, Globe } from "lucide-react";
import Link from "next/link";

export default async function GroupDetailPage({ params }: { params: { groupId: string } }) {
  const group = await prisma.group.findUnique({
    where: { id: params.groupId },
    include: {
      _count: { select: { members: true } },
      members: { take: 5, include: { user: { select: { name: true } } } }
    }
  });

  if (!group) {
    return <div className="text-center py-12">Group not found.</div>;
  }

  return (
    <div className="w-full">
      <Link href="/groups" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to Groups
      </Link>

      {/* Group Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand"></div>
        <div className="flex items-center gap-2 mb-2 mt-2">
          {group.isPrivate ? <Lock className="w-5 h-5 text-slate-400" /> : <Globe className="w-5 h-5 text-brand" />}
          <h1 className="text-2xl font-bold text-slate-900">{group.name}</h1>
        </div>
        <p className="text-slate-600 mb-4">{group.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Users className="w-4 h-4 text-slate-400" />
            {group._count.members} Members
          </div>
          <button className="bg-slate-900 text-white px-5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
            Join Group
          </button>
        </div>
      </div>

      {/* Placeholder for Group Feed */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">Group Feed</h3>
        <p className="text-sm text-slate-500">Conversations for this group will appear here.</p>
      </div>
    </div>
  );
}
