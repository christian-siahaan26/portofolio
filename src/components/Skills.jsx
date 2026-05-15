// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    color: "cyan",
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Blade", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    color: "emerald",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Typescript/Express.js", level: "Advanced" },
      { name: "REST API", level: "Advanced" },
      { name: "Laravel", level: "Intermediate" },
    ],
  },
  {
    category: "Database & ORM",
    color: "cyan",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Prisma", level: "Advanced" },
      { name: "Redis", level: "Familiar" },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "emerald",
    skills: [
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "Vercel", level: "Advanced" },
      { name: "AWS", level: "Familiar" },
    ],
  },
];

const LEVEL_CONFIG = {
  Advanced: {
    label: "Advanced",
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
  Intermediate: {
    label: "Intermediate",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  Familiar: {
    label: "Familiar",
    color: "text-gray-400 bg-gray-500/10 border-gray-500/30",
  },
};

function SkillItem({ name, level }) {
  const config = LEVEL_CONFIG[level];
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="font-mono text-sm text-gray-300">{name}</span>
      <span
        className={`text-xs font-mono px-2.5 py-1 rounded-full border ${config.color}`}
      >
        {config.label}
      </span>
    </div>
  );
}

const TECH_STACK = [
  {
    name: "TypeScript",
    bg: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
    text: "text-blue-300",
  },
  {
    name: "JavaScript",
    bg: "from-lime-500/20 to-lime-600/10",
    border: "border-lime-500/30",
    text: "text-lime-300",
  },
  {
    name: "PHP",
    bg: "from-pink-500/20 to-pink-600/10",
    border: "border-pink-500/30",
    text: "text-pink-300",
  },
  {
    name: "React",
    bg: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/30",
    text: "text-cyan-300",
  },
  {
    name: "Node.js",
    bg: "from-green-500/20 to-green-600/10",
    border: "border-green-500/30",
    text: "text-green-300",
  },
  {
    name: "PostgreSQL",
    bg: "from-indigo-500/20 to-indigo-600/10",
    border: "border-indigo-500/30",
    text: "text-indigo-300",
  },
  {
    name: "MySQL",
    bg: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/30",
    text: "text-violet-300",
  },
  {
    name: "Prisma",
    bg: "from-red-500/20 to-red-600/10",
    border: "border-red-500/30",
    text: "text-red-300",
  },
  {
    name: "Laravel",
    bg: "from-gray-500/20 to-gray-600/10",
    border: "border-gray-500/30",
    text: "text-gray-300",
  },
  {
    name: "Blade",
    bg: "from-sky-500/20 to-sky-600/10",
    border: "border-sky-500/30",
    text: "text-sky-300",
  },
  {
    name: "Redis",
    bg: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/30",
    text: "text-orange-300",
  },
  {
    name: "Tailwind",
    bg: "from-teal-500/20 to-teal-600/10",
    border: "border-teal-500/30",
    text: "text-teal-300",
  },
];

export default function Skills() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-cyan-500/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-cyan-400 text-sm tracking-widest mb-3"
          >
            02. what I work with
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Tech <span className="gradient-text">Stack</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 mx-auto w-24 h-0.5 bg-linear-to-r from-cyan-500 to-emerald-500"
          />
        </div>

        {/* Tech badges grid */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className={`skill-card px-5 py-3 flex-row bg-linear-to-br ${tech.bg} border ${tech.border}`}
            >
              <span className={`font-mono text-sm font-semibold ${tech.text}`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skill bars by category */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-1 h-6 rounded-full ${cat.color === "cyan" ? "bg-cyan-500" : "bg-emerald-500"}`}
                />
                <h3 className="font-display font-semibold text-gray-200">
                  {cat.category}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
