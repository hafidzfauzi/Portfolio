export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 md:min-h-screen bg-transparent text-white relative overflow-hidden px-6 py-28"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[160px_1fr] gap-10">
          <p data-aos="fade-up" className="text-sm text-gray-300">
            Experience
          </p>

          <div>
            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-heading text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-medium tracking-tight max-w-5xl"
            >
              Professional journey & hands-on development.
            </h2>

            <div className="mt-16 border-t border-white/20 pt-8">
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="grid md:grid-cols-[1fr_250px] gap-8 items-start"
              >
                <div>
                  <h3 className="text-2xl font-semibold">
                    Backend Developer Intern & QA Engineer Intern
                  </h3>
                  <p className="text-xl text-emerald-400 mt-2">
                    PT Bumi Teknik Semesta
                  </p>

                  <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed list-disc list-inside">
                    <li>Developed backend features and business logic for a Laravel-based Helpdesk Management System.</li>
                    <li>Built and maintained a Company Profile website using Laravel and Supabase.</li>
                    <li>Integrated PostgreSQL databases, CRUD operations, and API-based data management.</li>
                    <li>Performed functional testing, bug reporting, and verification of fixes.</li>
                  </ul>
                </div>

                <div className="md:text-right border-l md:border-l-0 md:border-r border-white/20 pl-6 md:pl-0 md:pr-6">
                  <p className="text-gray-400">
                    Feb 2026 — Present
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Internship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
