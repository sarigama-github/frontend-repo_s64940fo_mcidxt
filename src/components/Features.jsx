import { Shield, QrCode, ClipboardCheck, Activity, BellRing, Package } from 'lucide-react'

function Feature({ Icon, title, description }) {
  return (
    <div className="p-6 bg-white/70 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl bg-slate-900 text-white"><Icon size={20} /></div>
        <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  const items = [
    { Icon: Shield, title: 'Role-based Access', description: 'Secure login with admin, manager, and staff roles to control permissions.' },
    { Icon: QrCode, title: 'Asset Tagging', description: 'Generate unique IDs or QR codes for every asset to track with ease.' },
    { Icon: ClipboardCheck, title: 'Assignments', description: 'Assign assets to departments, customers, or offices with full history.' },
    { Icon: Activity, title: 'Maintenance', description: 'Log services, set next service dates, and track warranties & depreciation.' },
    { Icon: BellRing, title: 'Smart Alerts', description: 'Get reminders for maintenance and low-inventory notifications.' },
    { Icon: Package, title: 'Requisitions', description: 'Create requisitions automatically when stock falls below thresholds.' },
  ]

  return (
    <section className="relative z-10 py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <Feature key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
