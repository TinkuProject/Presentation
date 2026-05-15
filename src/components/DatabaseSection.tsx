import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ZoomImage from "./ZoomImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [
  {
    title: "Usuarios y Acceso",
    items: ["users", "notifications", "user_subscriptions"],
  },
  {
    title: "Negocios",
    items: [
      "businesses",
      "products",
      "discounts",
      "certifications",
      "opening_hours",
      "social_networks",
      "boosts",
    ],
  },
  {
    title: "Interacción",
    items: ["reviews", "visits"],
  },
  {
    title: "Eventos y Turismo",
    items: ["events", "reservations", "tourist_places", "tags"],
  },
  {
    title: "Componentes base",
    items: [
      "media",
      "categories",
      "transport_lines",
      "route_points",
      "vehicle_types",
      "entity_transport_lines",
    ],
  },
  {
    title: "Economía Tinku",
    items: [
      "transactions",
      "tinku_movements",
      "tinku_actions",
      "coin_packages",
      "qr_code_payments",
      "subscriptions_plans",
      "charging_points",
    ],
  },
];

function FlipCard({
  title,
  items,
  flipped,
  onClick,
}: {
  title: string;
  items: string[];
  flipped: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left"
      style={{ perspective: "1200px" }}
      aria-pressed={flipped}
    >
      <div
        className="relative h-[260px] w-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F8D7A5]/95 to-[#F5E0C8]/95
                     border border-[#E0A800]/60 shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                     backdrop-blur-md p-6 flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-4 h-12 w-12 rounded-full bg-[#80A2CE]/20 border border-[#80A2CE]/40 flex items-center justify-center">
            <span className="text-[#1F2937] text-lg font-bold">DB</span>
          </div>

          <h3 className="text-[#111827] text-2xl font-bold text-center px-3 leading-tight">
            {title}
          </h3>
        </div>

        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#111827] to-[#1F2937]
                     border border-[#80A2CE]/40 shadow-[0_12px_35px_rgba(0,0,0,0.3)]
                     p-6 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-[#F8F9FA] text-xl font-semibold text-center mb-5">
            {title}
          </h4>

          <div className="flex flex-wrap gap-2 justify-center">
            {items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-white/10 text-[#F8F9FA] text-sm border border-white/15"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

export default function DatabaseSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="database" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          Arquitectura y Base de Datos
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-12"
        >
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl
                         shadow-xl border border-white/20 max-w-5xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-[#F8F9FA] mb-6 drop-shadow">
                Arquitectura general
              </h3>

              <ZoomImage
                src="/diagrams/database_final.png"
                alt="Arquitectura de la base de datos"
              />

              <p className="text-[#F8F9FA]/80 mt-8 text-lg leading-relaxed text-left md:text-justify mx-auto">
                Supabase (PostgreSQL) gestiona usuarios, negocios, eventos,
                transacciones, servicios, productos y calificaciones. Incluye
                autenticación, políticas de seguridad y sincronización en tiempo
                real.
              </p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl
                         shadow-xl border border-white/20 max-w-6xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-[#F8F9FA] mb-3 drop-shadow">
                Módulos de la base de datos
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {modules.map((module, index) => (
                  <FlipCard
                    key={module.title}
                    title={module.title}
                    items={module.items}
                    flipped={flippedIndex === index}
                    onClick={() =>
                      setFlippedIndex(flippedIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>

        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #80A2CE !important;
            filter: drop-shadow(0 0 10px rgba(128, 162, 206, 0.8));
            transition: 0.3s ease-in-out;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            transform: scale(1.15);
            filter: drop-shadow(0 0 15px rgba(128, 162, 206, 1));
          }

          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.45) !important;
            opacity: 1 !important;
          }

          .swiper-pagination-bullet-active {
            background: #80A2CE !important;
          }

          .swiper-button-next {
            right: -10px !important;
          }

          .swiper-button-prev {
            left: -10px !important;
          }
        `}</style>
      </div>
    </section>
  );
}