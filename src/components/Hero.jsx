import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6 text-white space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Interactive 3D — public access
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Supreme Court Portal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300"> Futuristic, Open, Trustworthy.</span>
            </h1>
            <p className="text-slate-300 max-w-xl">
              A next‑generation interface to understand the Court’s work, access judgments, and explore the pillars of justice — built for the wider community.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#resources" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow hover:shadow-lg transition-shadow">Explore Resources</a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">About the Court</a>
            </div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  );
}
