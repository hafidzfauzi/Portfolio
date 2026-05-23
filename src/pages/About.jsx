export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="max-w-4xl mx-auto text-center p-6">

        <h2 data-aos="fade-up" className="text-3xl font-bold">
          About Me
        </h2>

        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-400"
        >
          Saya fokus pada penetration testing dan web security.
        </p>

      </div>
    </section>
  )
}