export default function ServicesSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 bg-neutral-900">
      <h2 className="mb-6 text-4xl font-bold">Mes Services</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="p-6 transition shadow-lg bg-neutral-800 rounded-2xl hover:scale-105">
          <h3 className="mb-2 text-xl font-semibold">Coaching</h3>
          <p className="text-gray-400">Accompagnement personnalisé vers la clarté et la franchise.</p>
        </div>
        <div className="p-6 transition shadow-lg bg-neutral-800 rounded-2xl hover:scale-105">
          <h3 className="mb-2 text-xl font-semibold">Ateliers</h3>
          <p className="text-gray-400">Sessions collectives pour avancer ensemble avec foi et courage.</p>
        </div>
        <div className="p-6 transition shadow-lg bg-neutral-800 rounded-2xl hover:scale-105">
          <h3 className="mb-2 text-xl font-semibold">Ressources</h3>
          <p className="text-gray-400">Guides, ebooks et contenus exclusifs pour ton évolution.</p>
        </div>
      </div>
    </div>
  )
}
