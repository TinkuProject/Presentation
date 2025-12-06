import { motion } from "framer-motion";
import ZoomImage from "./ZoomImage";

export default function Problem() {
  return (
    <section id="problem" className="py-20 px-6 relative z-[1]">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-white mb-10"
        >
          Problemática
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
        >
          <ZoomImage
            src="/diagrams/Ishikawa.png"
            alt="Representación del problema"
          />
        </motion.div>

      </div>
    </section>
  );
}
