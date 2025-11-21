import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/k3vzWf8TfEDJKl71/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-24">
        <div className="backdrop-blur-sm bg-white/40 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Secure Asset Management
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-2xl">
            Role-based access, asset tagging with QR codes, assignments, maintenance, and inventory alerts — all in one modern dashboard.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" />
    </section>
  )
}

export default Hero
