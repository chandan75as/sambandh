import { prisma } from "@/lib/prisma";
import { sendGlobalMessage } from "@/app/actions/chatActions";
import { Send, MessageSquare } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default async function GlobalChatPage() {
  const messages = await prisma.message.findMany({
    where: { groupId: null }, // Fetch only global messages
    orderBy: { createdAt: "asc" }, // Oldest at top, newest at bottom
    take: 50, // Limit to last 50 for performance
    include: {
      sender: { select: { name: true, isPremium: true, role: true } }
    }
  });

  return (
    <div className="w-full flex flex-col h-[calc(100vh-8rem)]">
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm shrink-0">
        <div className="p-2 bg-brand/10 rounded-lg">
          <MessageSquare className="w-6 h-6 text-brand" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">General Conversation</h1>
          <p className="text-sm text-slate-500">Global real-time discussion board.</p>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-y-auto p-4 mb-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-500 text-sm">
            No messages yet. Say hello!
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="flex gap-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex shrink-0 items-center justify-center text-slate-600 font-bold text-xs mt-1">
                {msg.sender.name?.charAt(0) || "U"}
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-sm text-slate-900">{msg.sender.name || "Anonymous"}</span>
                  <span className="text-[10px] text-slate-400">
                    {formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-b-xl rounded-tr-xl px-4 py-2 mt-1 text-sm text-slate-800 inline-block w-fit">
                  {msg.content}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message Input Form */}
      <form action={sendGlobalMessage} className="shrink-0 relative">
        <input 
          type="text" 
          name="content"
          required
          autoComplete="off"
          placeholder="Type your message..." 
          className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all shadow-sm"
        />
        <button 
          type="submit" 
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
