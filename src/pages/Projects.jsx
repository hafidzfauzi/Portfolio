import { projects } from '../data/projectsData'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 md:min-h-screen bg-transparent text-white relative overflow-hidden px-6 py-28"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:4px_4px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[160px_1fr] gap-10">
          <p data-aos="fade-up" className="text-sm text-gray-300">
            Projects
          </p>

          <div>
            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-heading text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-medium tracking-tight max-w-5xl"
            >
              Selected works in cybersecurity and web development.
            </h2>

            <div className="mt-16 space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="group grid md:grid-cols-[1fr_2fr] gap-8 border-t border-white/20 pt-8"
                >
                  <div>
                    <p className="text-sm text-gray-500">
                      0{index + 1}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold group-hover:text-gray-300 transition">
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-5">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="text-sm text-gray-300 border border-white/15 rounded-full px-4 py-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-5 mt-6 text-sm">
                      <a
                        href={project.github}
                        className="text-white underline underline-offset-4 hover:text-gray-400 transition"
                      >
                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        className="text-white underline underline-offset-4 hover:text-gray-400 transition"
                      >
                        Live Demo
                      </a>
                    </div>
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