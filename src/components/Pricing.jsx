import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    note: 'Free forever',
    features: ['Basic sections', 'Email support', 'MIT license'],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: '$12',
    note: 'per month',
    features: ['All sections', ' Priority support', 'Deploy workflow'],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Business',
    price: '$49',
    note: 'per month',
    features: ['Everything in Pro', 'Team seats', 'SLA & onboarding'],
    cta: 'Contact sales',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple pricing</h2>
          <p className="text-slate-600 dark:text-slate-300">Choose the plan that fits your stage. Upgrade anytime.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={"rounded-2xl border p-6 flex flex-col "+(t.featured ? "border-sky-300 dark:border-sky-700 shadow-soft bg-white/60 dark:bg-slate-900/40 backdrop-blur" : "border-slate-200 dark:border-slate-800")}>
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  {t.featured && <span className="text-xs px-2 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300">Popular</span>}
                </div>
                <div className="mt-3 text-4xl font-extrabold">{t.price}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t.note}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-sky-100 dark:bg-sky-900/40">
                        <Check className="w-4 h-4 text-sky-700 dark:text-sky-300"/>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className={"mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium "+(t.featured ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "border border-slate-300 dark:border-slate-700")}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
