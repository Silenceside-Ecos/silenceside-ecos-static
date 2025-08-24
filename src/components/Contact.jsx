import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
    setSent(false)
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Por favor ingresa tu nombre'
    if (!form.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = 'El correo electrónico no es válido'
    }
    if (!form.message.trim()) newErrors.message = 'Por favor cuéntanos tu mensaje'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const whatsappNumber = '17865708990'

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola, soy ${form.name} (${form.email}).\n${form.message}`
  )}`

  const handleWhatsAppClick = e => {
    if (!validate()) {
      e.preventDefault()
    }
  }

  // Simple email sending using mailto (for demo, not backend)
  const handleEmailSend = e => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Construct mailto link
    const subject = encodeURIComponent('Contacto desde Silenceside Ecos')
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\nMensaje:\n${form.message}`
    )
    window.location.href = `mailto:silencesideecos@gmail.com?subject=${subject}&body=${body}`
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900 dark:text-sky-200">¿Listo para transformar tu vida?</h2>
            <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
              Contáctanos hoy y recibe información personalizada sobre nuestros talleres, asesorías y acompañamiento. 
              <span className="block mt-2 font-semibold text-cyan-700 dark:text-cyan-300">¡Estamos aquí para ayudarte a dar el siguiente paso!</span>
            </p>
            <ul className="mt-6 space-y-2 text-base">
              <li><span className="font-semibold">Correo:</span> silencesideecos@gmail.com</li>
              <li><span className="font-semibold">Oficina:</span> Miami, FL</li>
            </ul>
          </div>
          <form className="glass rounded-3xl p-6 md:p-8 space-y-4" onSubmit={handleEmailSend}>
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-1 w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-900 px-3 py-2`}
                placeholder="Tu nombre completo"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Correo electrónico</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-900 px-3 py-2`}
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Mensaje</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className={`mt-1 w-full rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-900 px-3 py-2`}
                placeholder="¿En qué podemos ayudarte? Cuéntanos tu interés o consulta."
              ></textarea>
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 rounded-xl bg-sky-600 text-white dark:bg-sky-400 dark:text-slate-900 font-semibold hover:bg-sky-700 transition"
            >
              {loading ? 'Enviando...' : 'Enviar mensaje por Email'}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-white font-semibold mt-2 hover:bg-green-600 transition"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.693 4.607 2.01 6.553L4 29l7.707-2.01A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.89-.512-5.553-1.482l-.396-.236-4.574 1.192 1.192-4.574-.236-.396A10.96 10.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.2-7.6c-.285-.143-1.687-.832-1.948-.927-.26-.095-.45-.143-.64.143-.19.285-.737.927-.903 1.12-.166.19-.332.214-.617.072-.285-.143-1.205-.444-2.297-1.415-.85-.758-1.425-1.693-1.593-1.978-.166-.285-.018-.439.125-.582.129-.128.285-.332.428-.498.143-.166.19-.285.285-.475.095-.19.048-.357-.024-.5-.072-.143-.64-1.547-.877-2.117-.23-.554-.464-.479-.64-.488l-.545-.01c-.19 0-.5.072-.762.357-.262.285-1.002.98-1.002 2.39 0 1.41 1.025 2.773 1.168 2.967.143.19 2.02 3.09 4.898 4.204.685.295 1.22.472 1.637.604.687.219 1.312.188 1.803.114.55-.082 1.687-.688 1.926-1.352.238-.664.238-1.232.166-1.352-.072-.119-.262-.19-.547-.333z"/></svg>
              Contactar por WhatsApp
            </a>
            {sent && (
              <p className="text-xs text-green-600 mt-2">¡Tu mensaje fue preparado para enviar por email!</p>
            )}
            <p className="text-xs text-slate-500 mt-2">¡Tu mensaje es el primer paso para tu transformación!</p>
          </form>
        </div>
      </div>
    </section>
  )
}