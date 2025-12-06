import ZoomImage from "./ZoomImage";

export default function DatabaseSection() {
  return (
    <section id="database" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Arquitectura y Base de Datos
        </h2>

        <ZoomImage
          src="/diagrams/DbTinku.png"
          alt="Arquitectura de la base de datos"
        />

        <p className="text-[#F8F9FA]/80 mt-10 text-lg leading-relaxed">
          Supabase (PostgreSQL) gestiona usuarios, negocios, eventos,
          transacciones, servicios, productos y calificaciones. Incluye autenticación,
          políticas de seguridad y sincronización en tiempo real.
        </p>
      </div>
    </section>
  );
}
