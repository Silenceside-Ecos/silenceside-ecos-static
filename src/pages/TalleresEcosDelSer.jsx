import React, { useState } from 'react'
import data from '../data/talleresEcosDelSer.json'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-6 rounded-xl border border-sky-200 dark:border-sky-900 bg-gradient-to-br from-white via-sky-50 to-cyan-50 dark:from-slate-950 dark:via-sky-950 dark:to-cyan-900 shadow-lg transition-all">
      <button
        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg text-sky-900 dark:text-sky-200 bg-transparent hover:bg-sky-100 dark:hover:bg-sky-900 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2 text-2xl transition-transform duration-300">{open ? '−' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {open && (
          <div className="px-6 pb-6 pt-2 text-slate-700 dark:text-slate-200">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

function renderContent(content) {
  if (typeof content === 'string') {
    return <p className="mb-2">{content}</p>
  }
  if (Array.isArray(content)) {
    return (
      <ul className="list-disc ml-6 mb-2">
        {content.map((item, idx) => (
          <li key={idx}>{renderContent(item)}</li>
        ))}
      </ul>
    )
  }
  if (typeof content === 'object' && content !== null) {
    return Object.entries(content).map(([key, value], idx) => (
      <div key={idx} className="mb-2">
        <p className="font-medium text-cyan-700 dark:text-cyan-300">{key}:</p>
        {renderContent(value)}
      </div>
    ))
  }
  return null
}

function renderAccordion(section) {
  return (
    <Accordion key={section.title} title={section.title}>
      {section.description && <p className="mb-4 text-base">{section.description}</p>}
      {section.objectives && (
        <div>
          <p className="mb-2 font-medium text-cyan-700 dark:text-cyan-300">Objetivos:</p>
          {renderContent(section.objectives)}
        </div>
      )}
      {section.items && section.items.map(renderAccordion)}
      {section.content && renderContent(section.content)}
    </Accordion>
  )
}

export default function TalleresEcosDelSer() {
  return (
    <main className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="mb-10 text-center">
        <img src="/logo.svg" alt="Silenceside Ecos Logo" className="mx-auto h-16 w-16 mb-4 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold text-sky-900 dark:text-sky-200 mb-2 tracking-tight">{data.title}</h1>
        <h2 className="text-2xl font-semibold text-cyan-700 dark:text-cyan-300 mb-4">{data.subtitle}</h2>
        {data.intro.map((p, idx) => (
          <p key={idx} className="mb-2 text-lg text-slate-700 dark:text-slate-300">{p}</p>
        ))}
      </div>
      {data.sections.map(renderAccordion)}
    </main>
  )
}