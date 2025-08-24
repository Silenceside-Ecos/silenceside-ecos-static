import React from 'react'
import { Star } from 'lucide-react'

const items = [
  { name: 'Alex R.', role: 'Founder, Proto', quote: 'Clean, fast, and elegant. Shipped our site in a day.' },
  { name: 'María G.', role: 'PM, Nortech', quote: 'The sections are perfectly curated for a modern SaaS.' },
  { name: 'Sam T.', role: 'Designer, Wing', quote: 'Love the defaults and dark mode—less tinkering, more launch.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What people say</h2>
          <p className="text-slate-600 dark:text-slate-300">Social proof that builds trust and conversions.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(t => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex gap-1 text-amber-400 mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} fill="currentColor" />)}</div>
              <blockquote className="text-sm text-slate-700 dark:text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">{t.name} · {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
