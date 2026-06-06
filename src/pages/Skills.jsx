import { skillGroups } from '../data/skillsData'

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 md:min-h-screen bg-transparent text-white relative overflow-hidden px-6 py-28"
    >

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[160px_1fr] gap-10">
          <p data-aos="fade-up" className="text-sm text-gray-300">
            Skills
          </p>

          <div>
            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-heading text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-medium tracking-tight max-w-4xl"
            >
              Technical skills shaped through practice.
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-10">
              {skillGroups.map((group, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="border-t border-white/20 pt-6"
                >
                  <h3 className="text-xl font-semibold mb-5">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-sm text-gray-300 border border-white/15 rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}