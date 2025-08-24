import React from "react";

export default function Contact() {
  // Usamos mailto para enviar sin backend
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(form.get("name") || "");
    const email = encodeURIComponent(form.get("email") || "");
    const message = encodeURIComponent(form.get("message") || "");
    const subject = encodeURIComponent(`Contacto — Silenceside Ecos`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:silencesideecos@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-teal-800">
            Contáctanos
          </h1>
          <p className="mt-3 text-gray-600">
            Cuéntanos un poco sobre tu proyecto. Usualmente respondemos en{" "}
            <span className="font-medium text-teal-700">1–2 días hábiles</span>.
          </p>
        </div>

        {/* Tarjetas: info + formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-sm border border-teal-100 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Silenceside <span className="text-teal-600">Ecos</span>
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="block text-sm text-gray-500">Email</span>
                <a
                  className="text-teal-700 hover:underline break-all"
                  href="mailto:silencesideecos@gmail.com"
                >
                  silencesideecos@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">WhatsApp</span>
                <a
                  className="text-teal-700 hover:underline"
                  href="https://wa.me/17865708990"
                  target="_blank" rel="noreferrer"
                >
                  +1 (786) 570-8990
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">Teléfono</span>
                <span className="text-gray-800">+1 (786) 570-8990</span>
              </li>
              <li>
                <span className="block text-sm text-gray-500">Oficina</span>
                <span className="text-gray-800">Miami, FL — EE. UU.</span>
              </li>
              <li>
                <span className="block text-sm text-gray-500">Horario</span>
                <span className="text-gray-800">Lun–Sáb · 9:00 – 18:00</span>
              </li>
            </ul>

            {/* Botones rápidos */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:silencesideecos@gmail.com"
                className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700"
              >
                Escribir por email
              </a>
              <a
                href="https://wa.me/17865708990"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-teal-300 px-4 py-2 text-teal-700 hover:bg-teal-50 font-medium"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-teal-800">
              Envíanos un mensaje
            </h3>
            <p className="text-gray-600 mb-6">
              Completa el formulario y te responderemos pronto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Cuéntanos sobre tu consulta o proyecto…"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-600 py-3 text-white font-semibold hover:bg-teal-700"
              >
                Enviar mensaje
              </button>

              <p className="text-xs text-gray-500">
                Al enviar, se abrirá tu aplicación de correo para revisar y mandar el mensaje.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
