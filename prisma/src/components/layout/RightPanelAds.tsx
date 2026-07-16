import Link from "next/link";
import { Crown, TrendingUp } from "lucide-react";

export default function RightPanelAds() {
  return (
    <aside className="hidden xl:block w-80 fixed right-0 top-16 bottom-0 overflow-y-auto no-scrollbar p-6">
      <div className="flex flex-col gap-6">
        
        {/* Premium Upsell Box */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-5 h-5 text-premium" />
            <h3 className="font-bold text-slate-800">SAMBANDH Premium</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Stand out in Q&A, browse without ads, and create private groups.
          </p>
          <Link 
            href="/premium" 
            className="block w-full text-center bg-white border border-yellow-300 text-yellow-800 font-semibold py-2 rounded-lg hover:bg-yellow-100 transition-colors shadow-sm"
          >
            Upgrade Now
          </Link>
        </div>

        {/* Dedicated Ad Space 1 */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center min-h-[250px] relative overflow-hidden group">
          <span className="absolute top-2 right-3 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Advertisement</span>
          {/* Ad Slot Placeholder Image mimicking a real setup */}
          <div className="w-full h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 border border-dashed border-slate-300 mb-3">
            [ Ad Unit 300x250 ]
          </div>
          <p className="text-xs text-slate-500 text-center px-4 group-hover:text-slate-600 transition-colors">
            Support our platform by interacting with sponsors.
          </p>
        </div>

        {/* Trending Widget (Keeps the side panel engaging) */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-brand" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Trending Topics</h3>
          </div>
          <ul className="flex flex-col gap-3">
            {['#WebDevelopment', '#StartupLife', '#HealthTips', '#TechNews'].map((tag) => (
              <li key={tag}>
                <Link href="/feed" className="text-sm text-slate-600 hover:text-brand hover:underline font-medium">
                  {tag}
                </Link>
                <p className="text-xs text-slate-400 mt-0.5">1.2k discussions</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </aside>
  );
}
