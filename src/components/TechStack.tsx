import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiGooglemaps,
  SiNodedotjs,
  SiSupabase,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiTrello
} from "react-icons/si";

const webStack = [
  { icon: <SiReact size={60} />, name: "React" },
  { icon: <SiTypescript size={60} />, name: "TypeScript" },
  { icon: <SiTailwindcss size={60} />, name: "Tailwind CSS" }
];

const mobileStack = [
  { icon: <SiFlutter size={60} />, name: "Flutter" },
  { icon: <SiDart size={60} />, name: "Dart" },
  { icon: <SiGooglemaps size={60} />, name: "Google Maps SDK" }
];

const apiStack = [
  { icon: <SiNodedotjs size={60} />, name: "Node.js" },
  { icon: <SiSupabase size={60} />, name: "Supabase" },
  { icon: <SiFirebase size={60} />, name: "Firebase Storage" }
];

const toolsStack = [
  { icon: <SiFigma size={60} />, name: "Figma" },
  { icon: <SiGithub size={60} />, name: "GitHub" },
  { icon: <SiTrello size={60} />, name: "Trello" }
];

function StackGroup({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="text-left">
      <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.12 }}
            className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl 
                       border border-white/20 cursor-pointer flex flex-col items-center"
          >
            <div className="text-white mb-4">{item.icon}</div>
            <p className="text-[#F8F9FA]/90 font-semibold">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Stack Tecnológico
        </h2>

        {/* GROUPS */}
        <div className="space-y-24">
          <StackGroup title="Web" items={webStack} />
          <StackGroup title="Aplicación Móvil" items={mobileStack} />
          <StackGroup title="API / Backend" items={apiStack} />
          <StackGroup title="Herramientas de Desarrollo y Diseño" items={toolsStack} />
        </div>

      </div>
    </section>
  );
}
