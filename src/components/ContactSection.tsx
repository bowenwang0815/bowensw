import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import MagneticItem from './MagneticItem';
import ScrambleHeading from './ScrambleHeading';

const links = [
  {
    href: 'mailto:bowenwang0815@gmail.com',
    label: 'Email',
    note: 'Best for opportunities and direct outreach',
    icon: <FaEnvelope />,
  },
  {
    href: 'https://github.com/bowenwang0815',
    label: 'GitHub',
    note: 'Code, experiments, and project history',
    icon: <FaGithub />,
  },
  {
    href: 'https://linkedin.com/in/bowenwang0815',
    label: 'LinkedIn',
    note: 'Experience, background, and networking',
    icon: <FaLinkedin />,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 sm:py-16">
      <div className="section-shell">
        <div className="panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Contact</p>
              <div className="mt-3">
                <ScrambleHeading text="Let's connect." className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl" />
              </div>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Open to opportunities, collaborations, and conversations.</p>
            </div>

            <div className="grid gap-4">
              {links.map((link) => (
                <MagneticItem key={link.label} className="block w-full" strength={0.14}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between rounded-[1.5rem] border border-[var(--border)] bg-white/75 px-5 py-5 hover:-translate-y-0.5 hover:bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(197,106,61,0.12)] text-[var(--accent-dark)]">
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{link.label}</p>
                        <p className="text-sm text-slate-600">{link.note}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 group-hover:text-[var(--accent-dark)]">
                      Open
                    </span>
                  </a>
                </MagneticItem>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Bowen Wang
          </div>
        </div>
      </div>
    </section>
  );
}
