import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { submitSolution } from "@/app/actions/qaActions";

export default async function ProblemDetailPage({ params }: { params: { problemId: string } }) {
  const problem = await prisma.problem.findUnique({
    where: { id: params.problemId },
    include: {
      author: { select: { name: true, isPremium: true } },
      solutions: {
        include: { author: { select: { name: true, isPremium: true, role: true } } },
        orderBy: { upvotes: "desc" }
      }
    }
  });

  if (!problem) {
    return <div className="text-center py-12">Problem not found.</div>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Link href="/qa" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Q&A
      </Link>

      {/* Problem Block */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{problem.title}</h1>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <span>Asked by {problem.author.name}</span>
          <span>•</span>
          <span>{formatDistanceToNow(new Date(problem.createdAt), { addSuffix: true })}</span>
        </div>
        <p className="text-slate-700 whitespace-pre-wrap">{problem.description}</p>
      </div>

      {/* Solutions Section */}
      <h3 className="font-bold text-lg text-slate-900">{problem.solutions.length} Solutions</h3>
      
      <div className="space-y-4">
        {problem.solutions.map((solution) => (
          <div key={solution.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">
                {solution.author.name?.charAt(0) || "U"}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 text-sm">{solution.author.name || "Anonymous"}</span>
                  {solution.author.role === "VERIFIED_USER" && <CheckCircle2 className="w-3.5 h-3.5 text-brand" />}
                </div>
                <p className="text-xs text-slate-500">{formatDistanceToNow(new Date(solution.createdAt), { addSuffix: true })}</p>
              </div>
            </div>
            <p className="text-slate-700 text-sm whitespace-pre-wrap">{solution.content}</p>
          </div>
        ))}
      </div>

      {/* Submit Solution Form */}
      <form action={submitSolution} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <input type="hidden" name="problemId" value={problem.id} />
        <label htmlFor="content" className="block text-sm font-semibold text-slate-900 mb-2">Your Solution</label>
        <textarea 
          id="content" 
          name="content" 
          required 
          rows={4}
          placeholder="Write your solution here..."
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all text-sm resize-none mb-3"
        ></textarea>
        <button type="submit" className="bg-brand text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-hover transition-colors text-sm">
          Post Solution
        </button>
      </form>
    </div>
  );
}
