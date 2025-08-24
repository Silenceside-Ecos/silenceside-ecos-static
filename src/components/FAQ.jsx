import React from 'react'

const faqs = [
  { q: 'Can I use a custom domain?', a: 'Yes. Add a CNAME in the repo or in the Pages settings and point your DNS to GitHub Pages.' },
  { q: 'How do I deploy?', a: 'Push to main. GitHub Actions builds and deploys the dist folder to Pages.' },
  { q: 'Is this production-ready?', a: 'It is a solid starter. Review performance, accessibility, and content before launch.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">FAQ</h2>
          <div className="mt-10 divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {faqs.map((f,i)=>(
              <details key={i} className="group p-6">
                <summary className="cursor-pointer list-none font-medium flex justify-between items-center">
                  {f.q}
                  <span className="transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
