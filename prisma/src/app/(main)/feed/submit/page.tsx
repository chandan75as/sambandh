import { submitPost } from "@/app/actions/postActions";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function SubmitNewsPage() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/feed" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Feed
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Submit News</h1>
        <p className="text-slate-500 text-sm mt-1">Your submission will be reviewed by verified editors before going public.</p>
      </div>

      <form action={submitPost} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-slate-900 mb-1.5">Headline</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            required 
            placeholder="What's happening?"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all font-medium text-slate-900"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-semibold text-slate-900 mb-1.5">Story Content</label>
          <textarea 
            id="content" 
            name="content" 
            required 
            rows={6}
            placeholder="Provide the details..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all text-sm resize-none text-slate-700"
          ></textarea>
        </div>

        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-brand text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-hover transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" /> Submit to Queue
          </button>
        </div>
      </form>
    </div>
  );
}
