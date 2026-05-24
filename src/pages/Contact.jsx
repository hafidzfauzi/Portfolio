import { contacts } from '../data/contactData'

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 min-h-screen bg-transparent text-white relative overflow-hidden px-6 py-28"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:4px_4px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[160px_1fr] gap-10">
          <p data-aos="fade-up" className="text-sm text-gray-300">
            Contact
          </p>

          <div>
            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-heading text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-medium tracking-tight max-w-5xl"
            >
              Let’s connect and build something secure.
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 border-t border-white/20 pt-8">
              <div data-aos="fade-up" data-aos-delay="250">
                <p className="text-gray-400 leading-relaxed">
                  Feel free to contact me for collaboration, project discussion,
                  or cybersecurity-related opportunities.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="350" className="space-y-5">
                {contacts.map((contact) => {
                  const Icon = contact.icon

                  return (
                    <a
                      key={contact.name}
                      href={contact.link}
                      target={contact.link.startsWith('mailto:') ? undefined : '_blank'}
                      className="flex items-center gap-4 text-xl underline underline-offset-4 hover:text-gray-400 transition"
                    >
                      <Icon className="text-2xl" />
                      {contact.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}