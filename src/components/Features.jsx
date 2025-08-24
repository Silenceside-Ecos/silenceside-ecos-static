import React from 'react'
import { Sparkles, Shield, Zap, Boxes, Gauge, Palette } from 'lucide-react'

const data = [
  { icon: Sparkles, title: 'Modern UI', desc: 'Tasteful defaults with sensible spacing, typography, and shadows.' },
  { icon: Shield, title: 'Accessible', desc: 'Semantic HTML and keyboard-friendly components out of the box.' },
  { icon: Zap, title: 'Fast', desc: 'Vite-powered dev server and optimized production builds.' },
  { icon: Boxes, title: 'Composable', desc: 'Sections split into simple components you can mix and match.' },
  { icon: Gauge, title: 'SEO Ready', desc: 'Meta tags and 404 fallback for GitHub Pages.' },
  { icon: Palette, title: 'Theming', desc: 'Dark mode toggle with local storage preference.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need</h2>
          <p className="text-slate-600 dark:text-slate-300">Drop-in sections built with Tailwind—clean, responsive, and maintainable.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-soft transition-shadow">
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-sky-100 dark:bg-sky-900/40 mb-4">
                <Icon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
