import Link from "next/link";
import { Home, Newspaper, HelpCircle, Users, MessageSquare, ShieldCheck, Crown } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "News Feed", href: "/feed", icon: Newspaper },
    { name: "Q&A Problems", href: "/qa", icon: HelpCircle },
    { name: "Groups", href: "/groups", icon: Users },
    { name: "General Chat", href: "/chat", icon: MessageSquare },
  ];

  return (
    <aside className="hidden md:block w-64 fixed left-0 top-16 bottom-0 overflow-y-auto no-scrollbar border-r border-slate-200 bg-white">
      <div className="p-4 flex flex-col gap-6">
        
        {/* Main Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-brand font-medium transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        <hr className="border-slate-100" />

        {/* Admin / Monetization Sections */}
        <div className="flex flex-col gap-1">
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Platform</p>
          
          <Link 
            href="/premium"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-yellow-700 hover:bg-yellow-50 font-medium transition-colors"
          >
            <Crown className="w-5 h-5" />
            Premium Membership
          </Link>

          <Link 
            href="/admin/queue"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 font-medium transition-colors"
          >
            <ShieldCheck className="w-5 h-5" />
            Admin Queue
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-auto pt-8 pb-4 px-3">
          <p className="text-xs text-slate-400">© 2026 SAMBANDH Inc.</p>
          <div className="flex gap-2 mt-2 text-xs text-slate-500">
            <Link href="/" className="hover:underline">Privacy</Link>
            <span>•</span>
            <Link href="/" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
