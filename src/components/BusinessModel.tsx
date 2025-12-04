import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ZoomImage from "./ZoomImage";

import "swiper/css";
import "swiper/css/navigation";

type Slide = {
  title: string;
  text: string;
  img?: string;
};

export default function BusinessModel() {
  const slides: Slide[] = [
    { 
      title: "Modelo B2B2C",
      text: "La plataforma conecta negocios locales y prestadores de servicios con usuarios finales, generando valor para ambos mediante visibilidad, gestión digital y acceso centralizado a información."
    },
    { 
      title: "Propuesta de Valor",
      text: "Unifica turismo, comercio y transporte en una sola app. Los usuarios obtienen información confiable y beneficios; los negocios gestionan catálogos, promociones y métricas."
    },
    { 
      title: "Monedas Digitales",
      text: "1 moneda = 1 Bs. Simplifican pagos internos y promociones. Se incluyen bonificaciones iniciales y modelos futuros de recompensas para fomentar la participación."
    },
    { 
      title: "Suscripciones",
      text: "Tres planes dirigidos a socios comerciales, con bonificaciones en monedas digitales y beneficios progresivos.",
      img: "/negocio/suscripciones.png"
    },
    { 
      title: "Comparativa de Plataformas",
      text: "La matriz comparativa evidencia la diferenciación de Tinku frente a soluciones tradicionales.",
      img: "/negocio/comparativa.png"
    },
    { 
      title: "Costo Operativo Anual",
      text: "Incluye infraestructura digital como Supabase, Firebase, Railway, Vercel y dominio.",
      img: "/negocio/costo_anual.png"
    }
  ];

  const textOnly = slides.filter(s => !s.img);
  const withImage = slides.filter(s => s.img);

  return (
    <section id="modelo-negocio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Modelo de Negocio
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          className="pb-12"
        >

          {/* SLIDE 1 — TARJETAS HORIZONTALES EN DESKTOP, VERTICALES EN MOBILE */}
          <SwiperSlide className="!flex !justify-center !items-center">
            <div className="flex flex-col gap-8 max-w-3xl w-full">
              {textOnly.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl
                             shadow-2xl border border-white/20 text-left"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-[#F8F9FA]/80 leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </SwiperSlide>

          {/* SLIDES INDIVIDUALES — TEXTO + IMAGEN */}
          {withImage.map((s, i) => (
            <SwiperSlide key={i} className="!flex !justify-center !items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl
                           shadow-2xl border border-white/20 max-w-4xl w-full"
              >
                <h3 className="text-3xl font-bold text-white mb-4">{s.title}</h3>

                <p className="text-[#F8F9FA]/80 text-lg leading-relaxed mb-8">
                  {s.text}
                </p>

                <div className="w-full flex justify-center items-center rounded-2xl 
                                overflow-hidden border border-white/20 p-4 bg-white/5">
                  <ZoomImage
                    src={s.img!}
                    alt={s.title}
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}
