import { Calendar, FileText, Microscope, Layers } from 'lucide-react';

const items = [
  {
    icon: Calendar,
    title: 'Today at the Court',
    desc: 'Live cause list, sittings, and daily updates in one place.',
  },
  {
    icon: FileText,
    title: 'Recent Judgments',
    desc: 'Read, search, and save landmark decisions with clarity.',
  },
  {
    icon: Microscope,
    title: 'Case Analytics',
    desc: 'Visual insights into timelines, subjects, and outcomes.',
  },
  {
    icon: Layers,
    title: 'Open Data',
    desc: 'APIs and datasets for researchers, media, and the public.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Highlights</h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">Quick access to the most requested information — thoughtfully organized for everyone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <Icon className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
