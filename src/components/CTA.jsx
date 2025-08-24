import React from 'react'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-3xl p-10 bg-gradient-to-br from-sky-500 to-indigo-500 text-white text-center shadow-soft">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to launch?</h3>
          <p className="mt-2 opacity-90">Get a modern, responsive site shipped today.</p>
          <a href="#contact" className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium">Contact us</a>
        </div>
      </div>
    </section>
  )
}
