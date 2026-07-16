import { Download, Settings, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Account Settings</h1>
      
      <div className="space-y-4">
        {/* PWA Install Block */}
        <div className="bg-brand/5 border border-brand/20 rounded-xl p-5 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Download className="w-5 h-5 text-brand" /> Install SAMBANDH App
            </h3>
            <p className="text-sm text-slate-600 mt-1">Get the native app experience on your device.</p>
          </div>
          <button className="bg-brand text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-hover shadow-sm">
            Install
          </button>
        </div>

        {/* Standard Settings Blocks */}
        {[
          { icon: Settings, title: "General", desc: "Manage your profile details and preferences." },
          { icon: Bell, title: "Notifications", desc: "Choose what you want to be notified about." },
          { icon: Shield, title: "Privacy & Security", desc: "Update your password and secure your account." },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
