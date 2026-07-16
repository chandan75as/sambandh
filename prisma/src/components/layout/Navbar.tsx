import Link from "next/link";
import { Search, Menu, Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 h-16 bg-white border-b border-slate-200 z-50">
      <div className="flex items-center justify-between h-full px-4 max-w-[1600px] mx-auto">
        
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 rounded-md md:hidden hover:bg-slate-100 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTQS9RNhPOdTRuiW2ZiZ3zcQJFHHPUI35HNzgAfSV-0X786dcYbJ7muRBVmRUtNDxqxq_IDAqZw3nLSWbvoUJsiX24Pwt57sIEbQcn-b5AjdpVwiTkenznO-ebkSIObgMtzMnHxo7Ym8vTpUTGcfpS5Ven1LjnYxgbbpzH80c3RdaJPvKtdhJNwx4_gchJ/w640-h640/5146f3f2-7b48-4e8e-863b-ba8b25fcaaee.jpg" 
              alt="SAMBANDH Logo" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-brand hidden sm:block tracking-tight">SAMBANDH</span>
          </Link>
        </div>

        {/* Center: Global Search (Hidden on small mobile) */}
        <div className="hidden sm:flex flex-1 max-w-lg mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search news, groups, or problems..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Right: Actions & Auth */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/premium" className="hidden md:flex items-center text-xs font-semibold bg-premium/10 text-yellow-700 px-3 py-1.5 rounded-full hover:bg-premium/20 transition-colors">
            Go Premium
          </Link>
          
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-brand px-2 py-2">
              Log in
            </Link>
            <Link href="/register" className="text-sm font-medium bg-brand text-white px-4 py-2 rounded-full hover:bg-brand-hover transition-colors shadow-sm">
              Sign up
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
