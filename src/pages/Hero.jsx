import profileImg from '../assets/profile.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100svh] bg-transparent text-white relative overflow-hidden px-6 pt-28 md:pt-32"
    >

      <div className="relative z-10 max-w-6xl mx-auto min-h-[calc(100svh-7rem)] flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">

          <div>
            <h1
              data-aos="fade-up"
              className="font-heading text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-medium tracking-tight"
            >
              Backend Developer & <br />
              Cybersecurity Student
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-12 md:mt-16 grid md:grid-cols-[120px_1fr] gap-6 max-w-2xl"
            >
              <p className="text-sm text-gray-300">
                Info
              </p>

              <div className="text-sm text-gray-400 leading-relaxed">
                <p>
                  I am a Backend Developer Intern and Cybersecurity Engineering student
                  experienced in Laravel, PostgreSQL, and REST API integration.
                </p>

                <p className="mt-5">
                  Based in Cilacap, Indonesia.<br />
                  Email: hafidzfauzi021@gmail.com <br />
                  <a href="https://linkedin.com/in/hafidz-fauzi-86aa68300" target="_blank" className="hover:text-white transition">LinkedIn</a> &nbsp;|&nbsp; <a href="https://github.com/hafidzfauzi" target="_blank" className="hover:text-white transition">GitHub</a>
                </p>

                <div className="mt-6 flex gap-4">
                  <a href="#projects" className="text-white underline underline-offset-4">
                    View Projects
                  </a>
                  <a href="#contact" className="text-white underline underline-offset-4">
                    Contact Me
                  </a>
                  <a
                    href="https://portfolio-hafidzfauzi.xyz/CV-Hafidz-Fauzi.pdf"
                    download
                    className="text-white underline underline-offset-4 hover:text-gray-400 transition"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[430px]">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>

              <img
                src={profileImg}
                alt="Hafidz Fauzi"
                className="relative w-full h-full object-cover rounded-t-full rounded-b-3xl border border-emerald-400/20 shadow-2xl contrast-105 saturate-110 brightness-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}