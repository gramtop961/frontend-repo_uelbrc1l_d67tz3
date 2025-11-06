import { ArrowRight, BookOpen, Headphones, FileSearch, Building2 } from 'lucide-react';

const links = [
  {
    icon: BookOpen,
    title: 'Know Your Rights',
    desc: 'Plain-language guides to the Constitution and processes.',
  },
  {
    icon: FileSearch,
    title: 'Find a Case',
    desc: 'Search by party, case number, subject, or date range.',
  },
  {
    icon: Headphones,
    title: 'Accessibility',
    desc: 'Readable formats, screen-reader support, and language options.',
  },
  {
    icon: Building2,
    title: 'Visit & Contact',
    desc: 'Public hours, security, and assistance for first-time visitors.',
  },
];

function ResourceCard({ icon: Icon, title, desc }) {
  return (
    <a href="#" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-4">
        <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20">
          <Icon className="h-5 w-5 text-fuchsia-300" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-medium">{title}</h3>
            <ArrowRight className="h-4 w-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-slate-300 text-sm mt-2">{desc}</p>
        </div>
      </div>
    </a>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Public Resources</h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">Designed to be inclusive, readable, and helpful for the wider community.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p className="text-xs">© {new Date().getFullYear()} Supreme Court — For public information and awareness.</p>
          <div className="flex items-center gap-3 text-xs">
            <a href="#about" className="hover:text-white">About</a>
            <span aria-hidden>•</span>
            <a href="#resources" className="hover:text-white">Resources</a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
