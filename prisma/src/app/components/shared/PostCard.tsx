"use client";

import { formatDistanceToNow } from "date-fns";
import { MessageCircle, ThumbsUp, Share2, Crown, CheckCircle2, XCircle } from "lucide-react";
import { updatePostStatus } from "@/app/actions/postActions";

type PostProps = {
  post: {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    author: {
      name: string | null;
      isPremium: boolean;
      role: string;
    };
  };
  isAdminView?: boolean;
};

export default function PostCard({ post, isAdminView = false }: PostProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow mb-4">
      {/* Author Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
            {post.author.name?.charAt(0) || "U"}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-900 text-sm">{post.author.name || "Anonymous"}</span>
              {post.author.isPremium && <Crown className="w-4 h-4 text-premium" title="Premium Member" />}
              {post.author.role === "VERIFIED_USER" && <CheckCircle2 className="w-4 h-4 text-brand" title="Verified User" />}
            </div>
            <p className="text-xs text-slate-500">
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{post.title}</h2>
      <p className="text-slate-700 text-sm leading-relaxed mb-4 whitespace-pre-wrap line-clamp-4">
        {post.content}
      </p>

      {/* Action Footer */}
      {isAdminView ? (
        <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
          <button 
            onClick={() => updatePostStatus(post.id, "APPROVED")}
            className="flex-1 bg-green-50 text-green-700 font-medium py-2 rounded-lg hover:bg-green-100 transition-colors text-sm flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" /> Approve
          </button>
          <button 
            onClick={() => updatePostStatus(post.id, "REJECTED")}
            className="flex-1 bg-red-50 text-red-700 font-medium py-2 rounded-lg hover:bg-red-100 transition-colors text-sm flex items-center justify-center gap-2"
          >
            <XCircle className="w-4 h-4" /> Reject
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-6 pt-3 border-t border-slate-100">
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-brand text-sm font-medium transition-colors">
            <ThumbsUp className="w-4 h-4" /> <span>Like</span>
          </button>
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-brand text-sm font-medium transition-colors">
            <MessageCircle className="w-4 h-4" /> <span>Comment</span>
          </button>
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-brand text-sm font-medium transition-colors ml-auto">
            <Share2 className="w-4 h-4" /> <span>Share</span>
          </button>
        </div>
      )}
    </article>
  );
}
