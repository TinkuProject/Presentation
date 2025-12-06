import { motion } from "framer-motion";

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* TÍTULO */}
        <h2 className="text-4xl font-extrabold text-white mb-12">
          Demostración del Sistema
        </h2>

        {/* CONTENEDOR */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-12">

          {/* WEB */}
          <motion.a
            href="https://doc-ia.cloud"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Plataforma Web
            </h3>

            <img
              src="/screenshots/web.png"
              alt="Demo web"
              className="rounded-xl shadow-lg mx-auto max-w-[650px] w-full h-auto object-cover"
            />
          </motion.a>

          {/* APP */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Aplicación Móvil
            </h3>

            <img
              src="/screenshots/app.png"
              alt="Demo app"
              className="rounded-xl shadow-lg mx-auto w-[240px] h-auto object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
