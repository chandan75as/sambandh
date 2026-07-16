import Link from "next/link";
import { Users, Plus, Lock, Globe } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function GroupsPage() {
  const groups = await prisma.group.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { members: true } } }
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Communities</h1>
          <p className="text-sm text-slate-500">Join groups based on your interests.</p>
        </div>
        <Link 
          href="/groups/create" 
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-hover transition-colors text-sm shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Create Group
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500">No groups available. Create the first one!</p>
          </div>
        ) : (
          groups.map((group) => (
            <Link key={group.id} href={`/groups/${group.id}`} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-brand hover:shadow-sm transition-all group">
              <div className="flex items-center gap-2 mb-2">
                {group.isPrivate ? <Lock className="w-4 h-4 text-slate-400" /> : <Globe className="w-4 h-4 text-brand" />}
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand transition-colors truncate">{group.name}</h2>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4 h-10">{group.description}</p>
              <div className="flex items-center text-xs font-medium text-slate-500 bg-slate-50 w-fit px-2 py-1 rounded-md">
                <Users className="w-3.5 h-3.5 mr-1.5" />
                {group._count.members} Members
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
