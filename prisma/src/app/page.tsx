import Link from "next/link";
import { ArrowRight, Globe2, Lightbulb, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 w-full">
      <img 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTQS9RNhPOdTRuiW2ZiZ3zcQJFHHPUI35HNzgAfSV-0X786dcYbJ7muRBVmRUtNDxqxq_IDAqZw3nLSWbvoUJsiX24Pwt57sIEbQcn-b5AjdpVwiTkenznO-ebkSIObgMtzMnHxo7Ym8vTpUTGcfpS5Ven1LjnYxgbbpzH80c3RdaJPvKtdhJNwx4_gchJ/w640-h640/5146f3f2-7b48-4e8e-863b-ba8b25fcaaee.jpg" 
        alt="SAMBANDH Logo" 
        className="w-24 h-24 rounded-full object-cover mb-8 shadow-lg ring-4 ring-white"
      />
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 max-w-3xl">
        Discover, Solve, and <span className="text-brand">Learn Together.</span>
      </h1>
      
      <p className="text-lg text-slate-600 mb-10 max-w-2xl">
        Welcome to SAMBANDH. The ultimate platform to stay updated with verified news, collaborate on complex problems, and build communities around your passions.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href="/register" className="flex items-center gap-2 bg-brand text-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-hover transition-all shadow-lg">
          Get Started <ArrowRight className="w-5 h-5" />
        </Link>
        <Link href="/feed" className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm">
          Browse Feed
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-4xl text-left">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <Globe2 className="w-8 h-8 text-brand mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">Verified News</h3>
          <p className="text-slate-500 text-sm">Community-driven news, fact-checked and approved by verified editors.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <Lightbulb className="w-8 h-8 text-amber-500 mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">Problem Solving</h3>
          <p className="text-slate-500 text-sm">Post blockers and get real solutions from industry experts.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <Users className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">Private Groups</h3>
          <p className="text-slate-500 text-sm">Create hyper-focused communities around niches you care about.</p>
        </div>
      </div>
    </div>
  );
}
