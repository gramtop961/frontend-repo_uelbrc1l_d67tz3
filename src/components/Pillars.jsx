import { Scale, Users, Landmark, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Scale,
    title: 'Justice',
    desc: 'Fair, impartial adjudication accessible to every citizen.',
  },
  {
    icon: Users,
    title: 'Transparency',
    desc: 'Clear processes and open information enhance trust.',
  },
  {
    icon: Landmark,
    title: 'Constitution',
    desc: 'Upholding constitutional values and the rule of law.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    desc: 'Protecting rights and ensuring digital safety at scale.',
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/10 to-slate-900/0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Pillars of the Court</h2>
            <p className="text-slate-300 mt-2 max-w-2xl">A minimalist framework for understanding how the institution serves the nation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-indigo-400/20">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="text-slate-300 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
