import { motion } from "framer-motion";

export default function BusinessModel() {
  const items = [
    {
      title: "Modelo B2B2C",
      text: "La plataforma conecta negocios locales y prestadores de servicios con usuarios finales, generando valor para ambos mediante visibilidad, gestión digital y acceso centralizado a información."
    },
    {
      title: "Propuesta de Valor",
      text: "Unifica turismo, comercio y transporte en una sola app. Los usuarios obtienen información confiable y beneficios; los negocios gestionan catálogos, promociones y métricas."
    },
    {
      title: "Suscripciones",
      text: "Tres planes dirigidos a socios comerciales, con bonificaciones en monedas digitales y beneficios progresivos que incentivan la adopción de niveles superiores."
    },
    {
      title: "Monedas Digitales",
      text: "1 moneda = 1 Bs. Simplifican pagos internos y promociones. Se incluyen bonificaciones iniciales y modelos futuros de recompensas para fomentar la participación."
    },
    /*{
      title: "Servicios Adicionales",
      text: "Diseño de páginas web, campañas publicitarias segmentadas y mejoras de visibilidad para potenciar la presencia digital de los emprendimientos."
    }*/
  ];

  return (
    <section id="modelo-negocio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Modelo de Negocio
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {items.map((i, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="p-8 bg-white/10 backdrop-blur-xl border border-white/20
                         rounded-3xl shadow-xl text-left"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{i.title}</h3>
              <p className="text-[#F8F9FA]/80 leading-relaxed">{i.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
