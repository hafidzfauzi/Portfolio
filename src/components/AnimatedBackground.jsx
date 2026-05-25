export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* Noise */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:4px_4px]"></div>

      {/* Glow 1 */}
      <div className="absolute top-[10%] left-[-20%] w-[140%] h-40 animate-wave-slow">
        <div className="absolute w-full h-32 bg-white/15 blur-3xl rounded-[50%] rotate-[-6deg]"></div>
      </div>

      {/* Glow 2 */}
      <div className="absolute top-[38%] left-[-20%] w-[140%] h-40 animate-wave-medium">
        <div className="absolute w-full h-28 bg-cyan-400/10 blur-3xl rounded-[50%] rotate-[5deg]"></div>
      </div>

      {/* Glow 3 */}
      <div className="absolute top-[68%] left-[-20%] w-[140%] h-40 animate-wave-slow">
        <div className="absolute w-full h-32 bg-blue-500/10 blur-3xl rounded-[50%] rotate-[-4deg]"></div>
      </div>

      {/* Soft circles */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[15%] left-[8%] w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl animate-float-delay"></div>
    </div>
  )
}