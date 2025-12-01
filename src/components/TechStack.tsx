import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiGooglemaps,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiTrello
} from "react-icons/si";

export default function TechStack() {
  const logos = [
    { icon: <SiReact size={60} />, name: "React" },
    { icon: <SiTypescript size={60} />, name: "TypeScript" },
    { icon: <SiTailwindcss size={60} />, name: "Tailwind" },

    { icon: <SiFlutter size={60} />, name: "Flutter" },
    { icon: <SiDart size={60} />, name: "Dart" },
    { icon: <SiGooglemaps size={60} />, name: "Google Maps SDK" },

    { icon: <SiNodedotjs size={60} />, name: "Node.js" },
    { icon: <SiSupabase size={60} />, name: "Supabase" },
    { icon: <SiFirebase size={60} />, name: "Firebase Storage" },

    { icon: <SiFigma size={60} />, name: "Figma" },
    { icon: <SiGithub size={60} />, name: "GitHub" },
    { icon: <SiTrello size={60} />, name: "Trello" }
  ];

  return (
    <section id="stack" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Stack Tecnológico
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12 }}
              className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl 
              border border-white/20 cursor-pointer flex flex-col items-center"
            >
              <div className="text-white mb-4">{logo.icon}</div>
              <p className="text-[#F8F9FA]/90 font-semibold">{logo.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
