import Image from 'next/image';

const highlights = [
  'Computer Science and Business Information Management student at UC Irvine.',
  'Focused on building software with real purpose, real users, and real impact.',
];

const educationDetails = [
  { label: 'School', value: 'UC Irvine' },
  { label: 'Study', value: 'Computer Science + BIM' },
  { label: 'GPA', value: '3.93' },
  { label: 'Graduation', value: 'June 2026' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-16">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right" className="relative min-h-[340px] lg:min-h-[380px]">
          <div className="panel absolute left-0 top-6 w-[64%] rounded-[1.6rem] p-3">
            <Image
              src="/me2.jpg"
              alt="Bowen Wang portrait"
              width={360}
              height={440}
              className="h-auto w-full rounded-[1.2rem] object-cover"
            />
          </div>
          <div className="panel absolute bottom-0 right-4 w-[54%] rounded-[1.6rem] p-3">
            <Image
              src="/me3.jpg"
              alt="Bowen Wang casual portrait"
              width={300}
              height={380}
              className="h-auto w-full rounded-[1.2rem] object-cover"
            />
          </div>
        </div>

        <div data-aos="fade-left" className="panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">Built by perspective.</h2>
            <p className="text-lg leading-8 text-slate-600">
              I&apos;m a 4th year at UC Irvine studying Computer Science and Business Information Management. I care about
              making software that feels useful, intentional, and worth building in the first place.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-[1.5rem] border border-[var(--border)] bg-white/65 p-5">
                <p className="text-base leading-7 text-slate-700">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-dark)]">Education</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {educationDetails.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-slate-700">
                Studying Computer Science and Business Information Management with a strong academic record and a focus
                on building software that has clear, practical value.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[var(--deep)] p-6 text-white">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">Outside of work</p>
              <p className="mt-3 text-lg font-semibold">Basketball, concerts, travel, and exploring new cities.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(197,106,61,0.08)] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-dark)]">Currently chasing</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">More chances to ship thoughtful software at scale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
