import { motion } from "framer-motion";

export default function BusinessModel() {
  const items = [
    { title: "Público objetivo", text: "Emprendedores, negocios locales, consumidores, turistas y organizaciones." },
    { title: "Propuesta de valor", text: "Centralización, visibilidad, experiencia ágil y acceso en tiempo real." },
    { title: "Modelo Freemium", text: "Funcionalidades básicas gratuitas; servicios premium y promociones pagas." },
    { title: "Viabilidad", text: "Escalabilidad y sostenibilidad mediante suscripciones y servicios adicionales." },
  ];

  return (
    <section id="modelo-negocio" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Modelo de Negocio
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {items.map((i, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{i.title}</h3>
              <p className="text-[#F8F9FA]/80">{i.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
