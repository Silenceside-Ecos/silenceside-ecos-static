import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(800px_circle_at_50%_-20%,rgba(56,189,248,.22),transparent_40%),radial-gradient(600px_circle_at_0%_60%,rgba(99,102,241,.12),transparent_40%)] dark:bg-[radial-gradient(800px_circle_at_50%_-20%,rgba(56,189,248,.18),transparent_40%),radial-gradient(600px_circle_at_0%_60%,rgba(99,102,241,.14),transparent_40%)]">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-500 dark:from-cyan-800 dark:via-sky-900 dark:to-blue-900">
              <main  >
        {children}
      </main>
      </div>

      <Footer />
    </div>
  )
}