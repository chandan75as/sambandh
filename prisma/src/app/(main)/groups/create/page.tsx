import { createGroup } from "@/app/actions/groupActions";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";

export default function CreateGroupPage() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/groups" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Groups
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Create a Group</h1>
        <p className="text-slate-500 text-sm mt-1">Start a new community space for specific topics.</p>
      </div>

      <form action={createGroup} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-1.5">Group Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="e.g., React Developers India"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all font-medium text-slate-900"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-1.5">Description</label>
          <textarea 
            id="description" 
            name="description" 
            required 
            rows={4}
            placeholder="What is this group about?"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all text-sm resize-none text-slate-700"
          ></textarea>
        </div>

        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <input type="checkbox" id="isPrivate" name="isPrivate" className="w-4 h-4 text-brand focus:ring-brand border-slate-300 rounded cursor-pointer" />
          <label htmlFor="isPrivate" className="text-sm font-medium text-slate-900 cursor-pointer">
            Make this group Private
            <p className="text-xs text-slate-500 font-normal mt-0.5">Only members can see who's in the group and what they post. (Premium Feature in Production)</p>
          </label>
        </div>

        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-brand text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-hover transition-colors shadow-sm"
          >
            <Users className="w-4 h-4" /> Create Group
          </button>
        </div>
      </form>
    </div>
  );
}
