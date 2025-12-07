import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-3"
    >
      {/* LOGO UNIVERSIDAD */}
      <img
        src="/logos/univalle.png"
        alt="Logo UNIVALLE"
        className="absolute top-6 left-6 w-28 h-auto opacity-95 hover:opacity-100 
             transition-all drop-shadow-2xl"
      />

      {/* Blobs */}
      <div className="absolute w-[900px] h-[900px] bg-[#80A2CE]/20 rounded-full blur-[180px] top-[-300px] left-[-200px] -z-10" />
      <div className="absolute w-[700px] h-[700px] bg-[#0374AB]/20 rounded-full blur-[200px] bottom-[-200px] right-[-250px] -z-10" />

      {/* POSTULANTES */}
      <div className="absolute bottom-6 right-6 px-5 py-4 bg-white/10 backdrop-blur-lg 
                rounded-xl shadow border border-white/20 text-white font-semibold 
                flex items-center gap-4">
        <p className="text-white/90">Postulantes:</p>
        <p className="font-bold">Juan Abiel Iriarte Colque</p>
        <span className="text-white/40">|</span>
        <p className="font-bold">Maria Laura Nuñez Jaillita</p>
      </div>

      {/* TÍTULO */}
      <motion.h4
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-black drop-shadow-xl max-w-6xl"
      >
        Sistema multiplataforma para la difusión y posicionamiento de emprendimientos comerciales 
        y servicios profesionales en el departamento de Cochabamba
      </motion.h4>

      {/* BOTÓN */}
      <motion.a
        href="#summary"
        whileHover={{ scale: 1.1 }}
        className="mt-10 px-10 py-4 bg-[#046ea6] rounded-full text-lg font-semibold
        shadow-[0_0_25px_#0078B7] hover:bg-[#0369a1] transition-all"
      >
        Iniciar presentación
      </motion.a>
    </section>
  );
}
