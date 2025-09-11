import React, { useState } from 'react'
import { Espacio } from '../models/espacio.ts'
import { Nivel } from '../models/nivel.ts'
import { Eco } from '../models/eco.ts'
import { Serie } from '../models/serie.ts'
import { Objetivo } from '../models/objetivo.ts'
import { Taller } from '../models/taller.ts'

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
           <li key={idx}>
            {item.texto && renderContent(item.texto)}
            {item.nombre && renderContent(item.nombre)}
            </li> 
        ))}
      </ul>
    )
  }  
  
  return null
}

function renderAccordion(section) {
  return (
    <Accordion key={section.id} title={section.nombre}>
      {section.descripcion && <p style={{ whiteSpace: 'pre-line' }} className="mb-4 text-base">{section.descripcion}</p>}      
      {section.niveles && section.niveles.map(renderAccordion)}      
      {section.series && section.series.map(renderAccordion)}   
      {section.objetivos && (
        <div>
          <p className="mb-2 font-medium text-cyan-700 dark:text-cyan-300">Objetivos:</p>
          {renderContent(section.objetivos)}
        </div>
      )}   
      {section.talleres && (
        <div>
          <p className="mb-2 font-medium text-cyan-700 dark:text-cyan-300">Talleres:</p>
          {renderContent(section.talleres)}
        </div>
      )}   
    </Accordion>
  )
}

export default function TalleresEcosDelSer() {
  const serie1 = new Serie(
    1,
    'Serie I. El ser y el silencio (la denuncia o la revelación)',
    'Enfocada en el conocimiento, aprendizaje y la transformación personal con la la creación de un protocolo propio. ',
    [
      new Objetivo('Conocer los aspectos relacionados con lo que el cuerpo calla'),
      new Objetivo('Aprender diferentes habilidades para develar y cambiar lo que el cuerpo calla')
    ],
    [
      new Taller(1, 'Taller 1. La estructura básica del ser. El asiento de lo que el cuerpo calla.', ''),
      new Taller(2, 'Taller 2. Expresión de la estructura básica. La identidad y los espejos.', ''),
      new Taller(3, 'Taller 3. Mecanismo de expresión de la estructura básica. Parte 1: Las emociones, sentimientos, sensaciones. Las VAC', ''),
      new Taller(4, 'Taller 4. Mecanismo de expresión de la estructura básica. Parte 2: Los pensamientos, las creencias y los valores.', ''),
      new Taller(4, 'Taller 5. Mecanismo de expresión de la estructura básica. Parte 3: El lenguaje comunicacional del cuerpo', ''),
      new Taller(4, 'Taller 6. La expresión de la denuncia.', ''),
      new Taller(4, 'Taller 7. La autogestión de las memorias silenciadas.', ''),
    ]
  );

  const serie2 = new Serie(
    2,
    'Serie II. Los bucles y la dinámica perpetua',
    'Enfocada en los ciclos que el ser vivencia y en aprender a desprogramar patrones vivenciales ancestrales. ',
    [
      new Objetivo('Conocer los ciclos del tiempo y su dinámica'),
      new Objetivo('Adquirir habilidades para desprogramar los bucles residuales ancestrales y remodelar su propia vida.  ')
    ],
    [
      new Taller(8, 'Taller 8. El tiempo y los ciclos', ''),
      new Taller(9, 'Taller 9. Las memorias del ser', ''),
    ]
  )

  const nivel1EcoSer = new Nivel(
    1,
    'Nivel 1. Lo que el cuerpo calla ',
    'Este nivel inicial permite encontrar su huella ancestral causante de lo que el cuerpo calla y cómo se expresa en su cuerpo (físico-mental-emocional-espiritual).',
    [serie1, serie2]
  );

  const ecoSer = new Eco(
    1,
    'Ecos del Ser',
    'Ecos del ser es una propuesta de Espacios_e para el conocimiento y entendimiento de los Saberes Integrados que constituyen la base del sostenimiento del Bienestar del Ser. \n\n Se refiere a todo lo que está resonando como un eco dentro la conciencia profunda, como forma de llamar la atención de la conciencia superficial. \n\n Su objetivo fundamental es aprender desde lo personal y lo grupal, aquellas lecciones básicas y silenciadas, que forman parte de nuestra sabiduría como seres humanos y que se entrelazan con los conocimientos avanzados del día de hoy.\n\n La información incluye la realización de diversas actividades como talleres, seminarios, encuentros, coloquios, así como entrenamientos personalizados y grupales. \n\n Los encuentros se implementan en 3 tiempos o niveles, donde cada nivel abarca series informativo-prácticas, que propicia de manera escalonada la conexión y adquisición de conocimientos y recursos para el aprendizaje, el crecimiento y el desarrollo humano personal y grupal.',
    [nivel1EcoSer]
  );

  const espacio = new Espacio(
        1,
        'Espacios_e',
        'Lugares donde el eco trae la memoria de ¿quiénes somos y que venimos a hacer? \n Ofrece diferentes espacios orientados a crear las bases para el cambio de la percepción, la satisfacción y la felicidad del Ser humano. \n\n Entre estos campos están:',
        [ecoSer]
    );

  return (
    <main className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="mb-10 text-center">
        <img src="/logo.svg" alt="Silenceside Ecos Logo" className="mx-auto h-16 w-16 mb-4 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold text-sky-900 dark:text-sky-200 mb-2 tracking-tight">{espacio.nombre}</h1>
        <p style={{ whiteSpace: 'pre-line' }} className="mb-2 text-lg text-slate-700 dark:text-slate-300">{espacio.descripcion}</p>
      </div>
      {espacio.ecos.map(renderAccordion)}
    </main>
  )
}