import { UserCircle, Crown, MapPin, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function ProfilePage({ params }: { params: { username: string } }) {
  // In production, fetch user by username from Prisma here.
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="h-32 bg-slate-900"></div>
      <div className="px-6 pb-6 relative">
        <div className="w-24 h-24 bg-white border-4 border-white rounded-full flex items-center justify-center text-slate-300 bg-slate-100 -mt-12 mb-4 shadow-sm">
          <UserCircle className="w-16 h-16" />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              {params.username} <Crown className="w-5 h-5 text-premium" />
            </h1>
            <p className="text-slate-500 text-sm">Software Engineer & Contributor</p>
          </div>
          <Link href="/settings" className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
            Edit Profile
          </Link>
        </div>
        <div className="flex gap-4 mt-4 text-sm text-slate-500">
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> India</span>
          <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Joined 2026</span>
        </div>
      </div>
    </div>
  );
}
