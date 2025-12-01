import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="absolute w-[900px] h-[900px] bg-[#80A2CE]/20 rounded-full blur-[180px] top-[-300px] left-[-200px] -z-10" />
      <div className="absolute w-[700px] h-[700px] bg-[#0374AB]/20 rounded-full blur-[200px] bottom-[-200px] right-[-250px] -z-10" />

      <motion.h4
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-black drop-shadow-xl"
      >
        Sistema multiplataforma para la difusión y posicionamiento de emprendimientos,
        servicios profesionales y eventos en Cochabamba
      </motion.h4>

      <motion.a
        href="#resumen"
        whileHover={{ scale: 1.1 }}
        className="mt-10 px-10 py-4 bg-[#046ea6] rounded-full text-lg font-semibold
        shadow-[0_0_25px_#0078B7] hover:bg-[#0369a1] transition-all"
      >
        Iniciar presentación
      </motion.a>
    </section>
  );
}
