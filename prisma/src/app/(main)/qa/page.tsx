import Link from "next/link";
import { HelpCircle, MessageSquare } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";

export default async function QAPage() {
  const problems = await prisma.problem.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: { select: { name: true } },
      _count: { select: { solutions: true } }
    }
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Problem Sharing & Solving</h1>
          <p className="text-sm text-slate-500">Ask questions and help others find solutions.</p>
        </div>
        <Link 
          href="/qa/ask" 
          className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm shadow-sm"
        >
          <HelpCircle className="w-4 h-4" />
          Ask a Problem
        </Link>
      </div>

      <div className="space-y-3">
        {problems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500">No problems posted yet. Be the first to ask!</p>
          </div>
        ) : (
          problems.map((problem) => (
            <Link key={problem.id} href={`/qa/${problem.id}`} className="block bg-white border border-slate-200 rounded-xl p-5 hover:border-brand hover:shadow-sm transition-all group">
              <h2 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand transition-colors">{problem.title}</h2>
              <p className="text-sm text-slate-600 line-clamp-2 mb-3">{problem.description}</p>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5 text-brand bg-brand/10 px-2 py-1 rounded-md">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {problem._count.solutions} Solutions
                </span>
                <span>Asked by {problem.author.name || "Anonymous"}</span>
                <span>• {formatDistanceToNow(new Date(problem.createdAt), { addSuffix: true })}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
