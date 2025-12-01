import { motion } from "framer-motion";

export default function DatabaseSection() {
  return (
    <section id="base-datos" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Arquitectura y Base de Datos
        </h2>

        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/diagrams/database.png"
          className="mx-auto max-w-3xl rounded-3xl border border-white/20 shadow-2xl cursor-pointer"
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
