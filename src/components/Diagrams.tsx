import { motion } from "framer-motion";

export default function Diagrams() {
  const imgs = [
    "use-case.png",
    "sequence.png",
    "components.png",
    "database.png"
  ];

  return (
    <section id="diagramas" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Diagramas UML esenciales
        </h2>

        <div className="grid gap-12">
          {imgs.map((file, i) => (
            <motion.img
              key={i}
              src={`/diagrams/${file}`}
              whileHover={{ scale: 1.05 }}
              className="mx-auto max-w-3xl rounded-3xl border border-white/20 shadow-2xl cursor-pointer transition-all"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
