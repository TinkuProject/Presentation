import { motion } from "framer-motion";

export default function Costs() {
  const rows = [
    ["Horas/hombre", "Estimación del esfuerzo total"],
    ["Costo de personal", "Principal inversión del proyecto"],
    ["Servicios en la nube", "Supabase, Firebase, hosting"],
    ["Costo total estimado", "$5,000 - $6,000 USD"],
  ];

  return (
    <section id="costos" className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Costos del Proyecto
        </h2>

        <div className="overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <table className="w-full text-left text-[#F8F9FA]/90">
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  className="border-b border-white/20"
                >
                  <td className="py-5 px-6 font-semibold">{r[0]}</td>
                  <td className="py-5 px-6">{r[1]}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
