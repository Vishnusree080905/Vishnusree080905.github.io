export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100 md:px-16">
      <section className="mx-auto max-w-4xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-lime-400">
          Portfolio 
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I’m VISHNU S S.
          <br />
          Learning today. Building tomorrow.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
          Mechatronics Engineering Student | AI & ML | Python | Cloud Computing | Passionate About Technology & Innovation.
        </p>

        <a
          href="mailto:you@example.com"
          className="mt-8 inline-block rounded-full bg-lime-400 px-6 py-3 font-semibold text-zinc-950"
        >
          Contact me →
        </a>

        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected work
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 p-7">
              <p className="text-sm text-lime-400">01 · Project</p>
              <h2 className="mt-3 text-2xl font-semibold">Project One</h2>
              <p className="mt-3 text-zinc-400">
                Describe what you made, why it mattered, and what your role was.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-800 p-7">
              <p className="text-sm text-lime-400">02 · Project</p>
              <h2 className="mt-3 text-2xl font-semibold">Project Two</h2>
              <p className="mt-3 text-zinc-400">
                Add another project, experiment, case study, or achievement.
              </p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}