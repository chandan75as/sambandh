"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Using NextAuth's signIn method (implementation logic lives in lib/auth.ts)
    // For demo purposes, we will redirect straight to the feed on button click.
    setTimeout(() => {
      router.push("/feed");
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTQS9RNhPOdTRuiW2ZiZ3zcQJFHHPUI35HNzgAfSV-0X786dcYbJ7muRBVmRUtNDxqxq_IDAqZw3nLSWbvoUJsiX24Pwt57sIEbQcn-b5AjdpVwiTkenznO-ebkSIObgMtzMnHxo7Ym8vTpUTGcfpS5Ven1LjnYxgbbpzH80c3RdaJPvKtdhJNwx4_gchJ/w640-h640/5146f3f2-7b48-4e8e-863b-ba8b25fcaaee.jpg" 
            alt="SAMBANDH Logo" 
            className="w-16 h-16 rounded-full object-cover mb-4 shadow-sm"
          />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h1>
          <p className="text-slate-500 text-sm mt-1">Log in to discover, solve, and learn.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-brand text-white font-semibold py-2.5 rounded-lg hover:bg-brand-hover transition-colors mt-2 disabled:opacity-70"
          >
            {loading ? "Authenticating..." : (
              <>
                <LogIn className="w-4 h-4" />
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account?{' '}
            <Link href="/register" className="text-brand font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}
