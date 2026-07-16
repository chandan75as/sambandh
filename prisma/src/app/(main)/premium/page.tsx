import { Crown, Check } from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  const perks = [
    "No Advertisements anywhere on the platform.",
    "Exclusive 'Premium' gold badge on your profile and posts.",
    "Ability to create Private, invite-only Groups.",
    "Priority support in Q&A problem threads.",
    "Early access to new SAMBANDH features."
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="text-center mb-10">
        <Crown className="w-12 h-12 text-premium mx-auto mb-4" />
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Upgrade to SAMBANDH Premium</h1>
        <p className="text-slate-600">Unlock the full potential of your discovery and learning journey.</p>
      </div>

      <div className="bg-white border-2 border-premium/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-premium text-yellow-900 font-bold text-xs px-4 py-1 rounded-bl-lg uppercase tracking-wider">
          Most Popular
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Pro Membership</h2>
            <p className="text-slate-500 mt-1">For serious learners and contributors.</p>
          </div>
          <div className="text-right">
            <div className="flex items-end gap-1">
              <span className="text-4xl font-extrabold text-slate-900">₹499</span>
              <span className="text-slate-500 mb-1">/month</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Cancel anytime. Billed monthly.</p>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {perks.map((perk, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-0.5 bg-green-100 p-1 rounded-full text-green-700 shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-slate-700">{perk}</span>
            </li>
          ))}
        </ul>

        {/* In production, this would link to Stripe Checkout or Razorpay */}
        <Link href="/settings" className="block w-full py-4 text-center bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}
