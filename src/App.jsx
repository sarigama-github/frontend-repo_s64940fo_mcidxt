import Hero from './components/Hero'
import Features from './components/Features'
import AuthDemo from './components/AuthDemo'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <AuthDemo />
      <footer className="py-10 text-center text-sm text-slate-500">Built with security in mind — asset control made simple.</footer>
    </div>
  )
}

export default App
