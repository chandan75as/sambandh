"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real flow, this triggers a POST to an API route to create the user in the DB.
    // E.g., await fetch('/api/auth/register', { method: 'POST', body: JSON.stringify(...) })
    setTimeout(() => {
      router.push("/login");
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Join SAMBANDH</h1>
          <p className="text-slate-500 text-sm mt-1">Create an account to start contributing.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
            <input 
              id="name"
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all"
              placeholder="John Doe"
              required
            />
          </div>

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
              placeholder="Create a strong password"
              required
              minLength={8}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-2.5 rounded-lg hover:bg-slate-800 transition-colors mt-2 disabled:opacity-70"
          >
            {loading ? "Creating account..." : (
              <>
                <UserPlus className="w-4 h-4" />
                Sign Up
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="text-brand font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}
