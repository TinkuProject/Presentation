import { motion } from "framer-motion";

export default function Costs() {
  const rows = [
    ["Horas/Hombre Totales", "2.560 horas"],
    ["Costo de Personal", "Bs 75.976 (USD 10.916)"],
    ["Servicios en la Nube", "Bs 2.436 (USD 350)"],
    ["Costo Total", "Bs 78.412 (USD 11.266)"],
  ];

  return (
    <section id="costos" className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Estimación de Costos
        </h2>

        {/* TABLA RESUMEN */}
        <div className="overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-12">
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

        {/* CAPTURA DE TABLA REAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl p-6 rounded-3xl bg-white/10 backdrop-blur-xl 
                     border border-white/20 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Tabla oficial del documento
          </h3>

          <img
            src="/testing/costo-personal.png"
            alt="Tabla de costos del documento"
            className="rounded-xl border border-white/20 shadow-[0_0_15px_rgba(0,119,182,0.6)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
